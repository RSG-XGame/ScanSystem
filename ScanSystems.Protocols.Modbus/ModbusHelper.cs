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
                if (result >= short.MaxValue)
                {
                }
                if (result == 0)
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

        private ModbusRequest SendRead(ModbusPackage package, ModbusFunctions functionCode, bool isInternal)
        {
            ModbusRequest request = null;
            if (package.CountVariables > 0)
            {
                request = new ModbusRequest();
                request.IsInternal = isInternal;
                request.MBAPHeader.TransactionId = GetTransactionId();
                request.MBAPHeader.Length = 6;
                request.MBAPHeader.UnitId = UnitId;
                request.PDU.FunctionCode = functionCode;
                request.PDU.Data = new byte[4];
                ConvertingToBytes(package.StartRegister, request.PDU.Data, 0);
                ConvertingToBytes(package.CountRegisters, request.PDU.Data, 2);
            }
            return request;
        }
        private ModbusRequest SendWrite(ModbusPackage package, ModbusFunctions functionCode, bool isInternal)
        {
            ModbusRequest request = null;
            if (package.CountVariables > 0)
            {
                request = new ModbusRequest();
                request.IsInternal = isInternal;
                request.MBAPHeader.TransactionId = GetTransactionId();
                request.MBAPHeader.Length = 0;
                request.MBAPHeader.UnitId = UnitId;
                request.PDU.FunctionCode = functionCode;

                List<byte> pdu = new List<byte>();
                pdu.AddRange(BitConverter.GetBytes(Convert.ToUInt16(package.StartRegister)).Reverse());
                pdu.AddRange(BitConverter.GetBytes(Convert.ToUInt16(package.CountRegisters)).Reverse());

                switch (functionCode)
                {
                    case ModbusFunctions.ForceSingleCoil:
                    case ModbusFunctions.PresetSingleRegister:
                        request.MBAPHeader.Length = 6;
                        break;

                    case ModbusFunctions.ForceMultipleCoils:
                    case ModbusFunctions.PresetMultipleRegisters:
                        request.MBAPHeader.Length = (ushort)(7 + package.SizeInBytes);
                        pdu.Add(Convert.ToByte(package.SizeInBytes));
                        pdu.AddRange(package.GetData());
                        break;
                }
                request.PDU.Data = pdu.ToArray();
            }
            return request;
        }

        public ModbusRequest SendReadCoilStatus(ModbusPackage package, bool isInternal)
        {
            throw new NotSupportedException("Данная функция 'ReadCoilStatus' не поддерживается этой версией приложения!");
        }
        public ModbusRequest SendReadInputStatus(ModbusPackage package, bool isInternal)
        {
            throw new NotSupportedException("Данная функция 'ReadInputStatus' не поддерживается этой версией приложения!");
        }
        public ModbusRequest SendReadHoldingRegisters(ModbusPackage package, bool isInternal)
        {
            return SendRead(package, ModbusFunctions.ReadHoldingRegisters, isInternal);
        }
        public ModbusRequest SendReadInputRegisters(ModbusPackage package, bool isInternal)
        {
            return SendRead(package, ModbusFunctions.ReadInputRegisters, isInternal);
        }
        public ModbusRequest SendForceSingleCoil(ModbusPackage package, bool isInternal)
        {
            throw new NotSupportedException("Данная функция 'ForceSingleCoil' не поддерживается этой версией приложения!");
        }
        public ModbusRequest SendPresetSingleRegister(ModbusPackage package, bool isInternal)
        {
            throw new NotSupportedException("Данная функция 'PresetSingleRegister' не поддерживается этой версией приложения!");
        }
        public ModbusRequest SendForceMultipleCoils(ModbusPackage package, bool isInternal)
        {
            return SendWrite(package, ModbusFunctions.ForceMultipleCoils, isInternal);
        }
        public ModbusRequest SendPresetMultipleRegisters(ModbusPackage package, bool isInternal)
        {
            return SendWrite(package, ModbusFunctions.PresetMultipleRegisters, isInternal);
        }
    }

    internal static class ArrayHelper
    {
        public static byte[] Reverse(this byte[] data)
        {
            Array.Reverse(data);
            return data;
        }

        public static byte[] GetRange(this byte[] data, int startIndex, int length)
        {
            byte[] result = new byte[length];
            Array.Copy(data, startIndex, result, 0, length);
            for (int i = 0; i < length; i += 2)
            {
                byte temp = result[i];
                result[i] = result[i + 1];
                result[i + 1] = temp;
            }
            return result;
        }
    }

}
