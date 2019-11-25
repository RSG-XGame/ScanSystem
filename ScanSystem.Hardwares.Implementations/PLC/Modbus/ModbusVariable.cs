using ScanSystem.Hardwares.Interfaces.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.PLC.Modbus
{
    public class ModbusVariable<TType> : Variable<TType>
        where TType : IComparable, IConvertible, IComparable<TType>, IEquatable<TType>
    {
        private int registerNum;
        private int bitNum;

        public ModbusDataTypes DataType { get; private set; }
        public int RegisterNum { get; set; }
        public int BitNum { get; set; }
        
        public ModbusVariable()
        {
            bitNum = 0;
            registerNum = 0;
            DataTypeDefinition();
        }

        private void DataTypeDefinition()
        {
            if (typeof(TType) == typeof(bool))
            {
                DataType = ModbusDataTypes.BOOL;
            }
            else if (typeof(TType) == typeof(byte))
            {
                DataType = ModbusDataTypes.USINT;
            }
            else if (typeof(TType) == typeof(sbyte))
            {
                DataType = ModbusDataTypes.SINT;
            }
            else if (typeof(TType) == typeof(short))
            {
                DataType = ModbusDataTypes.INT;
            }
            else if (typeof(TType) == typeof(ushort))
            {
                DataType = ModbusDataTypes.UINT;
            }
            else if (typeof(TType) == typeof(int))
            {
                DataType = ModbusDataTypes.DINT;
            }
            else if (typeof(TType) == typeof(uint))
            {
                DataType = ModbusDataTypes.UDINT;
            }
            else if (typeof(TType) == typeof(long))
            {
                DataType = ModbusDataTypes.LINT;
            }
            else if (typeof(TType) == typeof(ulong))
            {
                DataType = ModbusDataTypes.ULINT;
            }
            else if (typeof(TType) == typeof(float))
            {
                DataType = ModbusDataTypes.REAL;
            }
            else if (typeof(TType) == typeof(double))
            {
                DataType = ModbusDataTypes.LREAL;
            }
            else
            {
                throw new ArgumentException("Не поддерживаемый тип данных. Не возможно реализовать переменную по данному типу данных.");
            }
        }
    }
}
