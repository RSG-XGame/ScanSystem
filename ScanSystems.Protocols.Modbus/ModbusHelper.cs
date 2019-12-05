using ScanSystem.Hardwares.Interfaces.Variables;
using ScanSystems.Protocols.Modbus.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace ScanSystems.Protocols.Modbus
{
    public class ModbusHelper
    {
        [Flags]
        private enum ConvertingFormats
        {
            Address = 1,
            Value = 2,
        }
        private delegate int[] ConvertToIntsHandle(IVariable variable, ConvertingFormats convertingFormat);

        #region transaction id
        private ushort transactionId;
        private object lockerTransaction;

        public byte UnitId { get; set; }

        private void InitializeTransactionId()
        {
            transactionId = 0;
            lockerTransaction = new object();
        }

        public ushort GetTransactionId()
        {
            ushort result = 0;
            lock (lockerTransaction)
            {
                result = ++transactionId;
                if (transactionId == 0)
                {
                    result = ++transactionId;
                }
            }
            return result;
        }
        #endregion

        #region packaging
        private void InitializeConverterDictionary()
        {
        }

        private void ConvertingToBytes(int value, byte[] array, int startIndex)
        {
            string temp = value.ToString("X4");
            array[startIndex] = byte.Parse(temp.Substring(0, 2), System.Globalization.NumberStyles.HexNumber);
            array[startIndex + 1] = byte.Parse(temp.Substring(temp.Length - 2, 2), System.Globalization.NumberStyles.HexNumber);
        }

        public ModbusPackage[] PackagingVariables(IVariable[] variables)
        {
            List<ModbusPackage> packages = new List<ModbusPackage>();
            ModbusPackage currentPackage = new ModbusPackage();
            var sortedVariables = variables.OrderBy(x => (x.Address as ModbusAddress).StartIndex);
            foreach (var variable in sortedVariables)
            {
                if (!currentPackage.Add(variable))
                {
                    packages.Add(currentPackage);
                    currentPackage = new ModbusPackage();
                    currentPackage.Add(variable);
                }
            }
            if (currentPackage.CountVariables > 0)
                packages.Add(currentPackage);
            return packages.ToArray();
        }
        #endregion

        public ModbusHelper()
        {
            InitializeTransactionId();
            InitializeConverterDictionary();
        }

        private ModbusRequest[] SendRead(ModbusPackage[] packages, ModbusFunctions functionCode)
        {
            List<ModbusRequest> requests = new List<ModbusRequest>();
            foreach (var package in packages)
            {
                if (package.CountVariables > 0)
                {
                    ModbusRequest request = new ModbusRequest();
                    request.MBAPHeader.Length = 6;
                    request.MBAPHeader.UnitId = UnitId;
                    request.PDU.FunctionCode = functionCode;
                    request.PDU.Data = new byte[4];
                    ConvertingToBytes(package.StartRegister, request.PDU.Data, 0);
                    ConvertingToBytes(package.CountRegisters, request.PDU.Data, 2);
                    requests.Add(request);
                }
            }
            return requests.ToArray();
        }
        private ModbusRequest[] SendWrite(ModbusPackage[] packages, ModbusFunctions functionCode)
        {
            List<ModbusRequest> requests = new List<ModbusRequest>();

            return requests.ToArray();
        }

        public ModbusRequest[] SendReadCoilStatus(ModbusPackage[] packages)
        {
            return SendRead(packages, ModbusFunctions.ReadCoilStatus);
        }
        public ModbusRequest[] SendReadInputStatus(ModbusPackage[] packages)
        {
            return SendRead(packages, ModbusFunctions.ReadInputStatus);
        }
        public ModbusRequest[] SendReadHoldingRegisters(ModbusPackage[] packages)
        {
            return SendRead(packages, ModbusFunctions.ReadHoldingRegisters);
        }
        public ModbusRequest[] SendReadInputRegisters(ModbusPackage[] packages)
        {
            return SendRead(packages, ModbusFunctions.ReadInputRegisters);
        }
        public ModbusRequest[] SendForceSingleCoil(IVariable variable)
        {
            List<ModbusRequest> requests = new List<ModbusRequest>();

            return requests.ToArray();
        }
        public ModbusRequest[] SendPresetSingleRegister(IVariable variable)
        {
            List<ModbusRequest> requests = new List<ModbusRequest>();

            return requests.ToArray();
        }
        public ModbusRequest[] SendForceMultipleCoils(IVariable[] variables)
        {
            List<ModbusRequest> requests = new List<ModbusRequest>();

            return requests.ToArray();
        }
        public ModbusRequest[] SendPresetMultipleRegisters(IVariable[] variables)
        {
            List<ModbusRequest> requests = new List<ModbusRequest>();

            return requests.ToArray();
        }
    }
}
