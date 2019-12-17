using ScanSystem.Hardwares.Implementations.Abstracts;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using ScanSystem.Hardwares.Interfaces.Variables;
using ScanSystems.Protocols.Modbus;
using ScanSystems.Protocols.Modbus.Common;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Timers;

namespace ScanSystem.Hardwares.Implementations.SchneiderElectric
{
    public class SEDevice : Device, IEnumerable<IVariable>
    {
        private List<byte> data;

        private readonly Dictionary<ModbusDataTypes, Func<ModbusVariableParams, IVariable>> dictCreateVariables;
        private List<ModbusPackage> packages;
        private List<IVariable> variables;
        private int maxLifeTime = 30000;

        public IVariable this[int index]
        {
            get
            {
                return variables[index];
            }
        }

        private ModbusHelper helper;

        private List<ModbusRequest> requestes;
        private object lockerRequestes;
        
        public SEDevice()
        {
            packages = new List<ModbusPackage>();
            lockerRequestes = new object();
            data = new List<byte>();
            requestes = new List<ModbusRequest>();
            helper = new ModbusHelper();
            dictCreateVariables = new Dictionary<ModbusDataTypes, Func<ModbusVariableParams, IVariable>>();
            variables = new List<IVariable>();

            InitializationDictCreateVariables();
        }

        private void CheckRequestsLifeTime()
        {
            if (maxLifeTime > 0)
            {
                lock (lockerRequestes)
                {
                    requestes.RemoveAll(x => x.ElapsedTime.TotalMilliseconds >= maxLifeTime);
                }
            }
        }
        protected override void PollingRequests()
        {
            CheckRequestsLifeTime();
            int index = 0;
            foreach (var package in packages)
            {
                var request = helper.SendReadHoldingRegisters(package, true);
                request.PackageId = index++;
                if (!SendRequest(request))
                {
                    lock (lockerRequestes)
                    {
                        requestes.Remove(request);
                    }
                }
            }
        }
        protected override void Connect()
        {
        }
        protected override void Disconnect()
        {
        }

        private void InitializationDictCreateVariables()
        {
            dictCreateVariables.Add(ModbusDataTypes.BOOL, CreateBool);
            dictCreateVariables.Add(ModbusDataTypes.BYTE, CreateByte);
            dictCreateVariables.Add(ModbusDataTypes.SHORT, CreateShort);
            dictCreateVariables.Add(ModbusDataTypes.USHORT, CreateUShort);
            dictCreateVariables.Add(ModbusDataTypes.INT, CreateInt);
            dictCreateVariables.Add(ModbusDataTypes.UINT, CreateUInt);
            dictCreateVariables.Add(ModbusDataTypes.LONG, CreateLong);
            dictCreateVariables.Add(ModbusDataTypes.ULONG, CreateULong);
            dictCreateVariables.Add(ModbusDataTypes.FLOAT, CreateFloat);
            dictCreateVariables.Add(ModbusDataTypes.DOUBLE, CreateDouble);
            dictCreateVariables.Add(ModbusDataTypes.STRING, CreateString);
        }
        public override void Initialization(IDeviceInitializationParams initParams)
        {
            base.Initialization(initParams);
            helper.UnitId = (initParams.Settings as SEDeviceSettings).UnitId;
            packages.Clear();
            packages.AddRange(CreatePackages((initParams.Settings as SEDeviceSettings).Variables.ToArray()));
            maxLifeTime = (initParams.Settings as SEDeviceSettings).MaxLifeTimeRequest;
        }

        public override bool SendRequest(IDeviceRequest request)
        {
            bool result = false;
            result = Add(request as ModbusRequest);
            if (result)
            {
                byte[] buffer = (request as ModbusRequest).GetBytes();

                SendRequest(buffer);
                (request as ModbusRequest).SendDate = DateTime.Now;
                System.Threading.Thread.Sleep(50);
                result = true;
            }

            return result;
        }

        protected override IDeviceEventArgs RecivedData(byte[] data, int length)
        {
            SEDeviceEventArgs result = new SEDeviceEventArgs();
            byte[] temp = new byte[length];
            Array.Copy(data, 0, temp, 0, length);
            this.data.AddRange(temp);

            int lastIndex;
            ModbusResponse[] responses = ModbusResponse.ReadResponses(this.data.ToArray(), this.data.Count, out lastIndex);
            this.data.RemoveRange(0, lastIndex);
            foreach (var response in responses)
            {
                var request = Get(response as ModbusResponse);
                if (request != null && request.IsInternal && !response.Error)
                {
                    packages[(request as ModbusRequest).PackageId].SetData(response.PDU.Data, 0);
                }
                else if (response.Error)
                {
                    InvokeDeviceError(new SEDeviceErrorEventArgs { ErrorCode = response.PDU.Data[0], Description = response.ErrorDescription });
                }
            }
            return result;
        }

        private bool Add(ModbusRequest request)
        {
            bool result = false;
            if (request != null)
            {
                lock (lockerRequestes)
                {
                    if (requestes.Find(x => x.MBAPHeader.TransactionId == request.MBAPHeader.TransactionId) == null)
                    {
                        requestes.Add(request);
                        result = true;
                    }
                    else
                    {
                        throw new ArgumentException("Запрос с таким Id транзакции уже есть в списке запросов!");
                    }
                }
            }
            return result;
        }
        private ModbusRequest Get(ModbusResponse response)
        {
            ModbusRequest result = null;
            if (response != null)
            {
                lock (lockerRequestes)
                {
                    result = requestes.Find(x => x.MBAPHeader.TransactionId == response.MBAPHeader.TransactionId);
                    requestes.Remove(result);
                }
            }
            return result;
        }

        #region initialize variables
        private ModbusPackage[] CreatePackages(ModbusVariableParams[] variableDescriptions)
        {
            variables.AddRange(CreateVariables(variableDescriptions));
            ModbusPackage[] packages = helper.PackagingVariables(variables.ToArray());
            return packages;
        }
        private IVariable[] CreateVariables(ModbusVariableParams[] variableDescriptions)
        {
            List<IVariable> variables = new List<IVariable>();
            foreach (var variableDescription in variableDescriptions)
            {
                IVariable variable = CreateInstance(variableDescription);
                (variable as IVariableInternal).VariableValueChanged += SEDevice_VariableValueChanged;
                if (variable != null)
                {
                    variables.Add(variable);
                }
            }
            return variables.ToArray();
        }

        private void SEDevice_VariableValueChanged(IVariable variable)
        {
            ModbusPackage package = packages.FirstOrDefault(x => x.Contains(variable)).PackageVariable(variable);
            var request = helper.SendPresetMultipleRegisters(package, false);
            request.PackageId = -1;
            if (!SendRequest(request))
            {
                lock (lockerRequestes)
                {
                    requestes.Remove(request);
                }
            }
        }
        
        private IVariable CreateInstance(ModbusVariableParams variableDescription)
        {
            IVariable variable = null;
            if (variableDescription != null)
            {
                variable = dictCreateVariables[variableDescription.DataType].Invoke(variableDescription);
            }
            return variable;
        }
        private IVariable CreateBool(ModbusVariableParams variableParams)
        {
            ModbusVariable<bool> variable = new ModbusVariable<bool>();
            variable.Initialize(variableParams);
            return variable;
        }
        private IVariable CreateByte(ModbusVariableParams variableParams)
        {
            ModbusVariable<byte> variable = new ModbusVariable<byte>();
            variable.Initialize(variableParams);
            return variable;
        }
        private IVariable CreateShort(ModbusVariableParams variableParams)
        {
            ModbusVariable<short> variable = new ModbusVariable<short>();
            variable.Initialize(variableParams);
            return variable;
        }
        private IVariable CreateUShort(ModbusVariableParams variableParams)
        {
            ModbusVariable<ushort> variable = new ModbusVariable<ushort>();
            variable.Initialize(variableParams);
            return variable;
        }
        private IVariable CreateInt(ModbusVariableParams variableParams)
        {
            ModbusVariable<int> variable = new ModbusVariable<int>();
            variable.Initialize(variableParams);
            return variable;
        }
        private IVariable CreateUInt(ModbusVariableParams variableParams)
        {
            ModbusVariable<uint> variable = new ModbusVariable<uint>();
            variable.Initialize(variableParams);
            return variable;
        }
        private IVariable CreateLong(ModbusVariableParams variableParams)
        {
            ModbusVariable<long> variable = new ModbusVariable<long>();
            variable.Initialize(variableParams);
            return variable;
        }
        private IVariable CreateULong(ModbusVariableParams variableParams)
        {
            ModbusVariable<ulong> variable = new ModbusVariable<ulong>();
            variable.Initialize(variableParams);
            return variable;
        }
        private IVariable CreateFloat(ModbusVariableParams variableParams)
        {
            ModbusVariable<float> variable = new ModbusVariable<float>();
            variable.Initialize(variableParams);
            return variable;
        }
        private IVariable CreateDouble(ModbusVariableParams variableParams)
        {
            ModbusVariable<double> variable = new ModbusVariable<double>();
            variable.Initialize(variableParams);
            return variable;
        }
        private IVariable CreateString(ModbusVariableParams variableParams)
        {
            ModbusVariable<string> variable = new ModbusVariable<string>();
            variable.Initialize(variableParams);
            return variable;
        }
        #endregion

        protected override void Dispose(bool disposing)
        {
            if (!Disposed)
            {
                if (disposing)
                {
                    //pollingTimer.Stop();
                    //pollingTimer.Dispose();
                }

                //pollingTimer = null;
            }

            base.Dispose(disposing);
        }

        public IEnumerator<IVariable> GetEnumerator()
        {
            return variables.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
