using ScanSystem.Hardwares.Implementations.Abstracts;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using ScanSystem.Hardwares.Interfaces.Variables;
using ScanSystems.Protocols.Modbus;
using ScanSystems.Protocols.Modbus.Common;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Timers;

namespace ScanSystem.Hardwares.Implementations.SchneiderElectric
{
    public class SEDevice : Device, IEnumerable<IVariable>
    {
        //private Timer pollingTimer;
        private List<byte> data;

        private readonly Dictionary<int, Func<ModbusVariableParams, IVariable>> dictCreateVariables;
        private ModbusPackage[] packages;
        private List<IVariable> variables;

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
            lockerRequestes = new object();
            data = new List<byte>();
            requestes = new List<ModbusRequest>();
            helper = new ModbusHelper();
            dictCreateVariables = new Dictionary<int, Func<ModbusVariableParams, IVariable>>();
            variables = new List<IVariable>();

            //pollingTimer = new Timer();
            //pollingTimer.Interval = 1000;
            //pollingTimer.AutoReset = true;
            //pollingTimer.Elapsed += PollingTimer_Elapsed;
            //pollingTimer.Enabled = true;
            //pollingTimer.Stop();

            InitializationDictCreateVariables();
        }

        protected override void PollingRequests()
        {
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
        //private void PollingTimer_Elapsed(object sender, ElapsedEventArgs e)
        //{
        //}
        protected override void Connect()
        {
            //pollingTimer.Start();
        }
        protected override void Disconnect()
        {
            //pollingTimer.Stop();
        }

        private void InitializationDictCreateVariables()
        {
            dictCreateVariables.Add(1, CreateBool);
            dictCreateVariables.Add(2, CreateByte);
            dictCreateVariables.Add(3, CreateShort);
            dictCreateVariables.Add(4, CreateUShort);
            dictCreateVariables.Add(5, CreateInt);
            dictCreateVariables.Add(6, CreateUInt);
            dictCreateVariables.Add(7, CreateLong);
            dictCreateVariables.Add(8, CreateULong);
            dictCreateVariables.Add(9, CreateFloat);
            dictCreateVariables.Add(10, CreateDouble);
            dictCreateVariables.Add(11, CreateString);
        }
        public override void Initialization(IDeviceInitializationParams initParams)
        {
            base.Initialization(initParams);
            helper.UnitId = (initParams.Settings as SEDeviceSettings).UnitId;
            //pollingTimer.Interval = (initParams.Settings as SEDeviceSettings).PollingTimeout;
            packages = CreatePackages((initParams.Settings as SEDeviceSettings).Variables.ToArray());
        }

        public override bool SendRequest(IDeviceRequest request)
        {
            bool result = false;
            result = Add(request as ModbusRequest);
            if (result)
            {
                byte[] buffer = (request as ModbusRequest).GetBytes();
                try
                {
                    SendRequest(buffer);
                }
                catch
                {
                    result = false;
                }
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
                if (request != null && request.IsInternal)
                {
                    packages[(request as ModbusRequest).PackageId].SetData(response.PDU.Data, 0);
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
                if (variable != null)
                {
                    variables.Add(variable);
                }
            }
            return variables.ToArray();
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
