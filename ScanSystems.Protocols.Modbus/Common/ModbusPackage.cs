using ScanSystem.Hardwares.Interfaces.Variables;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace ScanSystems.Protocols.Modbus.Common
{
    public class ModbusPackage : IEnumerator<IVariable>
    {
        #region filling bytes array
        private readonly Dictionary<Type, Action<byte[], int, IVariable>> fillDict;
     
        private void Fill(byte[] data, IVariable variable)
        {
            ModbusAddress addr = variable.Address as ModbusAddress;
            int byteNum = addr.WordNum * 2 + (addr.BitNum > 7 ? 1 : 0);
            fillDict[variable.GetValueType()].Invoke(data, byteNum, variable);
        }

        private void FillBool(byte[] data, int byteNum, IVariable variable)
        {
            FillBool(data, byteNum, variable as ModbusVariable<bool>);
        }
        private void FillByte(byte[] data, int byteNum, IVariable variable)
        {
            FillByte(data, byteNum, variable as ModbusVariable<byte>);
        }
        private void FillShort(byte[] data, int byteNum, IVariable variable)
        {
            FillShort(data, byteNum, variable as ModbusVariable<short>);
        }
        private void FillUShort(byte[] data, int byteNum, IVariable variable)
        {
            FillUShort(data, byteNum, variable as ModbusVariable<ushort>);
        }
        private void FillInt(byte[] data, int byteNum, IVariable variable)
        {
            FillInt(data, byteNum, variable as ModbusVariable<int>);
        }
        private void FillUInt(byte[] data, int byteNum, IVariable variable)
        {
            FillUInt(data, byteNum, variable as ModbusVariable<uint>);
        }
        private void FillLong(byte[] data, int byteNum, IVariable variable)
        {
            FillLong(data, byteNum, variable as ModbusVariable<long>);
        }
        private void FillULong(byte[] data, int byteNum, IVariable variable)
        {
            FillULong(data, byteNum, variable as ModbusVariable<ulong>);
        }
        private void FillFloat(byte[] data, int byteNum, IVariable variable)
        {
            FillFloat(data, byteNum, variable as ModbusVariable<float>);
        }
        private void FillDouble(byte[] data, int byteNum, IVariable variable)
        {
            FillDouble(data, byteNum, variable as ModbusVariable<double>);
        }
        private void FillString(byte[] data, int byteNum, IVariable variable)
        {
            FillString(data, byteNum, variable as ModbusVariable<string>);
        }

        private void FillBool(byte[] data, int byteNum, ModbusVariable<bool> variable)
        {
            int bitNum = variable.Address.BitNum > 7 ? variable.Address.BitNum - 8 : variable.Address.BitNum;
            bool value = (data[byteNum] & (1 << bitNum)) != 0;
            if (value)
            {
                if (!variable.Value)
                    data[byteNum] &= (byte)~(1 << bitNum);
            }
            else
            {
                if (variable.Value)
                    data[byteNum] |= (byte)(1 << bitNum);
            }
        }
        private void FillByte(byte[] data, int byteNum, ModbusVariable<byte> variable)
        {
            data[byteNum] = variable.Value;
        }
        private void FillShort(byte[] data, int byteNum, ModbusVariable<short> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void FillUShort(byte[] data, int byteNum, ModbusVariable<ushort> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void FillInt(byte[] data, int byteNum, ModbusVariable<int> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void FillUInt(byte[] data, int byteNum, ModbusVariable<uint> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void FillLong(byte[] data, int byteNum, ModbusVariable<long> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void FillULong(byte[] data, int byteNum, ModbusVariable<ulong> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void FillFloat(byte[] data, int byteNum, ModbusVariable<float> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void FillDouble(byte[] data, int byteNum, ModbusVariable<double> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void FillString(byte[] data, int byteNum, ModbusVariable<string> variable)
        {
            byte[] temp = ReverseData(Encoding.ASCII.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }

        private byte[] ReverseData(byte[] data)
        {
            byte[] result = new byte[data.Length];
            for (int i = 0; i < data.Length; i += 2)
            {
                result[i] = data[i + 1];
                result[i + 1] = data[i];
            }
            return result;
        }

        private void InitializeFillDict()
        {
            fillDict.Add(typeof(bool), FillBool);
            fillDict.Add(typeof(byte), FillByte);
            fillDict.Add(typeof(short), FillShort);
            fillDict.Add(typeof(ushort), FillUShort);
            fillDict.Add(typeof(int), FillInt);
            fillDict.Add(typeof(uint), FillUInt);
            fillDict.Add(typeof(long), FillLong);
            fillDict.Add(typeof(ulong), FillULong);
            fillDict.Add(typeof(float), FillFloat);
            fillDict.Add(typeof(double), FillDouble);
            fillDict.Add(typeof(string), FillString);
        }
        #endregion

        private readonly IEnumerable<IVariable> variables;

        public Guid PackageId { get; private set; } = Guid.NewGuid();
        public IVariable this[int index] { get => (variables as List<IVariable>)[index]; }

        public int StartRegister
        {
            get
            {
                int result = -1;
                if (CountVariables > 0)
                {
                    result = (variables.OrderBy(x => (x.Address as ModbusAddress).StartIndex).First().Address as ModbusAddress).WordNum;
                }
                return result;
            }
        }
        public int CountRegisters
        {
            get
            {
                int result = -1;
                if (CountVariables > 0)
                {
                    int min = variables.Min(x=>(x.Address as ModbusAddress).WordNum);
                    int max = variables.Max(x => (x.Address as ModbusAddress).WordNum);
                    result = max - min + 1;
                }
                return result;
            }
        }

        public int MaxSizeInBits => 1920;
        public int SizeInBits => (variables as List<IVariable>).Sum(x => (x.Address as ModbusAddress).CountBits);
        public int SizeInBytes => SizeInBits / 8;
        public int CountVariables => (variables as List<IVariable>).Count;
        public IVariable Current => variables.GetEnumerator().Current;
        object IEnumerator.Current => variables.GetEnumerator().Current;

        public ModbusPackage()
        {
            variables = new List<IVariable>();
            fillDict = new Dictionary<Type, Action<byte[], int, IVariable>>();
         
            InitializeFillDict();
        }

        public bool Add(IVariable variable)
        {
            bool result = false;

            if (!variables.Contains(variable) && ((variables as List<IVariable>).Count == 0 || 
                (variables as List<IVariable>)[(variables as List<IVariable>).Count - 1].Address.Union(variable.Address)))
            {
                variable.Disposing += Variable_Disposing;
                (variables as List<IVariable>).Add(variable);
                result = true;
            }

            return result;
        }

        public byte[] GetData(byte[] source)
        {
            byte[] result = new byte[CountVariables > 0 ? CountRegisters : 0];
            
            if (source.Length != result.Length)
                throw new ArgumentException($"Размер исходного массива не соответствует размеру пакета '{PackageId}'.");

            foreach (var variable in variables)
            {
                Fill(result, variable);
            }
            return result;
        }

        private void Variable_Disposing(object sender)
        {
            IVariable variable = sender as IVariable;
            variable.Disposing -= Variable_Disposing;
            (variables as List<IVariable>).Remove(variable);
        }

        #region IDisposable Support
        private bool disposedValue = false; // Для определения избыточных вызовов

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: освободить управляемое состояние (управляемые объекты).
                }

                // TODO: освободить неуправляемые ресурсы (неуправляемые объекты) и переопределить ниже метод завершения.
                // TODO: задать большим полям значение NULL.

                disposedValue = true;
            }
        }

        // Этот код добавлен для правильной реализации шаблона высвобождаемого класса.
        public void Dispose()
        {
            // Не изменяйте этот код. Разместите код очистки выше, в методе Dispose(bool disposing).
            Dispose(true);
            // TODO: раскомментировать следующую строку, если метод завершения переопределен выше.
            // GC.SuppressFinalize(this);
        }

        public bool MoveNext()
        {
            return variables.GetEnumerator().MoveNext();
        }

        public void Reset()
        {
            variables.GetEnumerator().Reset();
        }
        #endregion
    }
}
