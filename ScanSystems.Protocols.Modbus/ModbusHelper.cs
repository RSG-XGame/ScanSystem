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

        #region supported data types
        private void InitializeConverterDictionary()
        {
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

        public ModbusRequest[] SendReadCoilStatus(IVariable[] variables)
        {
            List<ModbusRequest> requests = new List<ModbusRequest>();
            
            return requests.ToArray();
        }
        public ModbusRequest[] SendReadInputStatus(IVariable[] variables)
        {
            List<ModbusRequest> requests = new List<ModbusRequest>();

            return requests.ToArray();
        }
        public ModbusRequest[] SendReadHoldingRegisters(IVariable[] variables)
        {
            List<ModbusRequest> requests = new List<ModbusRequest>();

            return requests.ToArray();
        }
        public ModbusRequest[] SendReadInputRegisters(IVariable[] variables)
        {
            List<ModbusRequest> requests = new List<ModbusRequest>();

            return requests.ToArray();
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
