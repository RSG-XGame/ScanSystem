using ScanSystem.Hardwares.Interfaces.Variables;
using System;
using System.Collections.Generic;
using System.Text;

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
        private delegate byte[] ConvertToBytesHandle(IVariable variable, ConvertingFormats convertingFormat);

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
        private Dictionary<Type, ConvertToBytesHandle> converterDictionary;

        private void InitializeConverterDictionary()
        {
            converterDictionary = new Dictionary<Type, ConvertToBytesHandle>();

            converterDictionary.Add(typeof(bool), BooleanToBytes);
            converterDictionary.Add(typeof(byte), ByteToBytes);
            converterDictionary.Add(typeof(sbyte), SByteToBytes);
            converterDictionary.Add(typeof(short), ShortToBytes);
            converterDictionary.Add(typeof(ushort), UShortToBytes);
            converterDictionary.Add(typeof(int), IntToBytes);
            converterDictionary.Add(typeof(uint), UIntToBytes);
            converterDictionary.Add(typeof(long), LongToBytes);
            converterDictionary.Add(typeof(ulong), ULongToBytes);
            converterDictionary.Add(typeof(float), FloatToBytes);
            converterDictionary.Add(typeof(double), DoubleToBytes);
            converterDictionary.Add(typeof(string), StringToBytes);
        }

        private byte[] BooleanToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
        }
        private byte[] ByteToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
        }
        private byte[] SByteToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
        }
        private byte[] ShortToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
        }
        private byte[] UShortToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
        }
        private byte[] IntToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
        }
        private byte[] UIntToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
        }
        private byte[] LongToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
        }
        private byte[] ULongToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
        }
        private byte[] FloatToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
        }
        private byte[] DoubleToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
        }
        private byte[] StringToBytes(IVariable variable, ConvertingFormats convertingFormat)
        {
            throw new NotImplementedException();
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

            ModbusRequest request = new ModbusRequest();
            request.MBAPHeader.TransactionId = GetTransactionId();
            request.MBAPHeader.Length = 6;
            request.MBAPHeader.UnitId = UnitId;
            request.PDU.FunctionCode = ModbusFunctions.ForceSingleCoil;
            request.PDU.Data = new byte[4];

            byte[] temp = converterDictionary[variable.GetValueType()].Invoke(variable, ConvertingFormats.Value | ConvertingFormats.Address);
            Array.Copy(temp, 0, request.PDU.Data, 0, 4);

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
