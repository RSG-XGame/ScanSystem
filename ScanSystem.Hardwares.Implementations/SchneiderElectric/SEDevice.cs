using ScanSystem.Hardwares.Implementations.Abstracts;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using ScanSystem.Hardwares.Interfaces.Variables;
using ScanSystems.Protocols.Modbus;
using ScanSystems.Protocols.Modbus.Common;
using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;
using System.Timers;

namespace ScanSystem.Hardwares.Implementations.SchneiderElectric
{
    public class SEDevice : Device
    {
        private Timer pollingTimer;

        private readonly Dictionary<int, Func<SEVeriableDescription, IVariable>> dictCreateVariables;
        private ModbusPackage[] packages;
        private byte[] source;

        private ModbusProtocol protocol;
        private ModbusHelper helper;

        private List<ModbusRequest> requestes;
        private object lockerRequestes;

        public ModbusProtocol Protocol => protocol;

        public SEDevice()
        {
            lockerRequestes = new object();
            requestes = new List<ModbusRequest>();
            helper = new ModbusHelper();
            dictCreateVariables = new Dictionary<int, Func<SEVeriableDescription, IVariable>>();

            pollingTimer = new Timer();
            pollingTimer.Interval = 1000;
            pollingTimer.AutoReset = true;
            pollingTimer.Elapsed += PollingTimer_Elapsed;
            pollingTimer.Enabled = true;
            pollingTimer.Stop();

            InitializationDictCreateVariables();
        }

        private void PollingTimer_Elapsed(object sender, ElapsedEventArgs e)
        {
            foreach (var package in packages)
            {
                helper.SendPresetMultipleRegisters(package);
            }
        }
        protected override void Connect()
        {
            pollingTimer.Start();
        }
        protected override void Diconnect()
        {
            pollingTimer.Stop();
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
            packages = CreatePackages((initParams.Settings as SEDeviceSettings).Variables.ToArray());
        }

        public override bool SendRequest(IDeviceRequest request)
        {
            bool result = Add(request as ModbusRequest);
            if (result)
            {
                NetworkStream stream = client.GetStream();
                byte[] buffer = (request as ModbusRequest).GetBytes();
                stream.Write(buffer, 0, buffer.Length);
            }
            return result;
        }

        protected override IDeviceEventArgs RecivedData(byte[] data, int length)
        {
            SEDeviceEventArgs result = new SEDeviceEventArgs();
            result.Response = new ModbusResponse();
            (result.Response as ModbusResponse).FromBytes(data, length);
            result.Request = Get(result.Response as ModbusResponse);
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
        private ModbusPackage[] CreatePackages(SEVeriableDescription[] variableDescriptions)
        {
            ModbusPackage[] packages = helper.PackagingVariables(CreateVariables(variableDescriptions));
            return packages;
        }
        private IVariable[] CreateVariables(SEVeriableDescription[] variableDescriptions)
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

        private IVariable CreateInstance(SEVeriableDescription variableDescription)
        {
            IVariable variable = null;
            if (variableDescription != null)
            {
                variable = dictCreateVariables[variableDescription.DataType].Invoke(variableDescription);
            }
            return variable;
        }

        private IVariable CreateBool(SEVeriableDescription variableDescription)
        {
            ModbusVariable<bool> variable = new ModbusVariable<bool>();
            variable.Initialize(variableDescription.Name, variableDescription.Address);
            return variable;
        }
        private IVariable CreateByte(SEVeriableDescription variableDescription)
        {
            ModbusVariable<byte> variable = new ModbusVariable<byte>();
            variable.Initialize(variableDescription.Name, variableDescription.Address);
            return variable;
        }
        private IVariable CreateShort(SEVeriableDescription variableDescription)
        {
            ModbusVariable<short> variable = new ModbusVariable<short>();
            variable.Initialize(variableDescription.Name, variableDescription.Address);
            return variable;
        }
        private IVariable CreateUShort(SEVeriableDescription variableDescription)
        {
            ModbusVariable<ushort> variable = new ModbusVariable<ushort>();
            variable.Initialize(variableDescription.Name, variableDescription.Address);
            return variable;
        }
        private IVariable CreateInt(SEVeriableDescription variableDescription)
        {
            ModbusVariable<int> variable = new ModbusVariable<int>();
            variable.Initialize(variableDescription.Name, variableDescription.Address);
            return variable;
        }
        private IVariable CreateUInt(SEVeriableDescription variableDescription)
        {
            ModbusVariable<uint> variable = new ModbusVariable<uint>();
            variable.Initialize(variableDescription.Name, variableDescription.Address);
            return variable;
        }
        private IVariable CreateLong(SEVeriableDescription variableDescription)
        {
            ModbusVariable<long> variable = new ModbusVariable<long>();
            variable.Initialize(variableDescription.Name, variableDescription.Address);
            return variable;
        }
        private IVariable CreateULong(SEVeriableDescription variableDescription)
        {
            ModbusVariable<ulong> variable = new ModbusVariable<ulong>();
            variable.Initialize(variableDescription.Name, variableDescription.Address);
            return variable;
        }
        private IVariable CreateFloat(SEVeriableDescription variableDescription)
        {
            ModbusVariable<float> variable = new ModbusVariable<float>();
            variable.Initialize(variableDescription.Name, variableDescription.Address);
            return variable;
        }
        private IVariable CreateDouble(SEVeriableDescription variableDescription)
        {
            ModbusVariable<double> variable = new ModbusVariable<double>();
            variable.Initialize(variableDescription.Name, variableDescription.Address);
            return variable;
        }
        private IVariable CreateString(SEVeriableDescription variableDescription)
        {
            ModbusVariable<string> variable = new ModbusVariable<string>();
            variable.Initialize(variableDescription.Name, variableDescription.Address);
            return variable;
        }
        #endregion

        protected override void Dispose(bool disposing)
        {
            if (!Disposed)
            {
                if (disposing)
                {
                    protocol.Dispose();
                }

                protocol = null;
            }

            base.Dispose(disposing);
        }
    }
}
