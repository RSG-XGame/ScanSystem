using ScanSystem.Hardwares.Interfaces.Variables;
using ScanSystems.Protocols.Modbus.Common;
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
        private Dictionary<Type, ConvertToIntsHandle> converterDictionary;

        private void InitializeConverterDictionary()
        {
            converterDictionary = new Dictionary<Type, ConvertToIntsHandle>();

            //converterDictionary.Add(typeof(bool), BooleanToInts);
            //converterDictionary.Add(typeof(byte), ByteToInts);
            //converterDictionary.Add(typeof(sbyte), SByteToInts);
            converterDictionary.Add(typeof(short), ShortToInts);
            converterDictionary.Add(typeof(ushort), UShortToInts);
            converterDictionary.Add(typeof(int), IntToInts);
            converterDictionary.Add(typeof(uint), UIntToInts);
            converterDictionary.Add(typeof(long), LongToInts);
            converterDictionary.Add(typeof(ulong), ULongToInts);
            converterDictionary.Add(typeof(float), FloatToInts);
            converterDictionary.Add(typeof(double), DoubleToInts);
            converterDictionary.Add(typeof(string), StringToInts);
        }
        
        private int[] ToInts<T>(IVariable<T> variable, ConvertingFormats convertingFormat)
            where T : IComparable, IComparable<T>, IConvertible, IEquatable<T>
        {
            return null;
        }
        
        private int[] BooleanToInts(IVariable[] variables, ConvertingFormats convertingFormat)
        {
            List<int> result = new List<int>();

            if (variables.Length > 16)
                throw new ArgumentException("Количество бит больше, чем может поместиться в слове!");

            int wordNum = -1;
            int value = 0;
            foreach (var variable in variables)
            {
                if (wordNum == -1)
                {
                    wordNum = (variable as ModbusAddress).WordNum;
                }
                else
                {
                    if (wordNum != (variable as ModbusAddress).WordNum)
                    {
                        throw new InvalidOperationException("Невозможно компоновать биты из разных слов.");
                    }
                }
                if ((bool)variable.GetValue())
                    value |= (1 << (variable as ModbusAddress).BitNum);
            }

            if (convertingFormat == ConvertingFormats.Address)
            {
                result.Add(wordNum);
            }
            if (convertingFormat == ConvertingFormats.Value)
            {
                result.Add(value);
            }

            return result.ToArray();
        }
        private int[] ByteToInts(IVariable[] variables, ConvertingFormats convertingFormat)
        {
            List<int> result = new List<int>();

            if (variables.Length > 2)
                throw new ArgumentException("Количество байт больше, чем может поместиться в слове!");

            int wordNum = -1;
            byte[] temp = new byte[4] { 0, 0, 0, 0 };
            int index = 3;
            foreach (var variable in variables)
            {
                if (wordNum == -1)
                {
                    wordNum = (variable as ModbusAddress).WordNum;
                }
                else
                {
                    if (wordNum != (variable as ModbusAddress).WordNum)
                    {
                        throw new InvalidOperationException("Невозможно компоновать байты из разных слов.");
                    }
                }
                temp[index--] = (byte)variable.GetValue();
            }

            if (convertingFormat == ConvertingFormats.Address)
            {
                result.Add(wordNum);
            }
            if (convertingFormat == ConvertingFormats.Value)
            {
                result.Add(BitConverter.ToInt32(temp, 0));
            }

            return result.ToArray();
        }
        private int[] SByteToInts(IVariable[] variables, ConvertingFormats convertingFormat)
        {
            List<int> result = new List<int>();

            if (variables.Length > 2)
                throw new ArgumentException("Количество байт больше, чем может поместиться в слове!");

            int wordNum = -1;
            byte[] temp = new byte[4] { 0, 0, 0, 0 };
            int index = 3;
            foreach (var variable in variables)
            {
                if (wordNum == -1)
                {
                    wordNum = (variable as ModbusAddress).WordNum;
                }
                else
                {
                    if (wordNum != (variable as ModbusAddress).WordNum)
                    {
                        throw new InvalidOperationException("Невозможно компоновать байты из разных слов.");
                    }
                }
                temp[index--] = Convert.ToByte(variable.GetValue());
            }

            if (convertingFormat == ConvertingFormats.Address)
            {
                result.Add(wordNum);
            }
            if (convertingFormat == ConvertingFormats.Value)
            {
                result.Add(BitConverter.ToInt32(temp, 0));
            }

            return result.ToArray();
        }
        private int[] ShortToInts(IVariable variable, ConvertingFormats convertingFormat)
        {
            List<int> result = new List<int>();
            if (convertingFormat == ConvertingFormats.Address)
            {
                result.Add((variable as ModbusAddress).WordNum);
            }
            if (convertingFormat == ConvertingFormats.Value)
            {
                result.Add(Convert.ToInt32(variable.GetValue()));
            }
            return result.ToArray();
        }
        private int[] UShortToInts(IVariable variable, ConvertingFormats convertingFormat)
        {
            List<int> result = new List<int>();
            if (convertingFormat == ConvertingFormats.Address)
            {
                result.Add((variable as ModbusAddress).WordNum);
            }
            if (convertingFormat == ConvertingFormats.Value)
            {
                result.Add(Convert.ToInt32(variable.GetValue()));
            }
            return result.ToArray();
        }
        private int[] IntToInts(IVariable variable, ConvertingFormats convertingFormat)
        {
            List<int> result = new List<int>();
            if (convertingFormat == ConvertingFormats.Address)
            {
                result.Add((variable as ModbusAddress).WordNum);
            }
            if (convertingFormat == ConvertingFormats.Value)
            {
                result.Add(Convert.ToInt32(variable.GetValue()));
            }
            return result.ToArray();
        }
        private int[] UIntToInts(IVariable variable, ConvertingFormats convertingFormat)
        {
            List<int> result = new List<int>();
            if (convertingFormat == ConvertingFormats.Address)
            {
                result.Add((variable as ModbusAddress).WordNum);
            }
            if (convertingFormat == ConvertingFormats.Value)
            {
                result.Add(Convert.ToInt32(variable.GetValue()));
            }
            return result.ToArray();
        }
        private int[] LongToInts(IVariable variable, ConvertingFormats convertingFormat)
        {
            return ToInts(variable as IVariable<long>, convertingFormat);
        }
        private int[] ULongToInts(IVariable variable, ConvertingFormats convertingFormat)
        {
            return ToInts(variable as IVariable<ulong>, convertingFormat);
        }
        private int[] FloatToInts(IVariable variable, ConvertingFormats convertingFormat)
        {
            return ToInts(variable as IVariable<float>, convertingFormat);
        }
        private int[] DoubleToInts(IVariable variable, ConvertingFormats convertingFormat)
        {
            return ToInts(variable as IVariable<double>, convertingFormat);
        }
        private int[] StringToInts(IVariable variable, ConvertingFormats convertingFormat)
        {
            return ToInts(variable as IVariable<string>, convertingFormat);
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
