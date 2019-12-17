using ScanSystem.Hardwares.Interfaces.Variables;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace ScanSystems.Protocols.Modbus.Common
{
    public class ModbusPackage : IPackage, IEnumerator<IVariable>
    {
        #region filling bytes array
        private readonly Dictionary<Type, Action<byte[], int, IVariable>> getDict;
        private readonly Dictionary<Type, Action<byte[], int, IVariable>> setDict;

        private void Get(byte[] data, IVariable variable)
        {
            int byteNum = GetByteNum(variable.Address as ModbusAddress, StartRegister);
            getDict[variable.GetValueType()].Invoke(data, byteNum, variable);
        }
        private void Set(byte[] data, IVariable variable)
        {
            int byteNum = GetByteNum(variable.Address as ModbusAddress, StartRegister);
            setDict[variable.GetValueType()].Invoke(data, byteNum, variable);
        }

        private int GetByteNum(ModbusAddress address, int startRegister)
        {
            return address.WordNum * 2 + (address.BitNum > 7 ? 1 : 0) - startRegister * 2;
        }

        private void GetBool(byte[] data, int byteNum, IVariable variable)
        {
            GetBool(data, byteNum, variable as ModbusVariable<bool>);
        }
        private void GetByte(byte[] data, int byteNum, IVariable variable)
        {
            GetByte(data, byteNum, variable as ModbusVariable<byte>);
        }
        private void GetShort(byte[] data, int byteNum, IVariable variable)
        {
            GetShort(data, byteNum, variable as ModbusVariable<short>);
        }
        private void GetUShort(byte[] data, int byteNum, IVariable variable)
        {
            GetUShort(data, byteNum, variable as ModbusVariable<ushort>);
        }
        private void GetInt(byte[] data, int byteNum, IVariable variable)
        {
            GetInt(data, byteNum, variable as ModbusVariable<int>);
        }
        private void GetUInt(byte[] data, int byteNum, IVariable variable)
        {
            GetUInt(data, byteNum, variable as ModbusVariable<uint>);
        }
        private void GetLong(byte[] data, int byteNum, IVariable variable)
        {
            GetLong(data, byteNum, variable as ModbusVariable<long>);
        }
        private void GetULong(byte[] data, int byteNum, IVariable variable)
        {
            GetULong(data, byteNum, variable as ModbusVariable<ulong>);
        }
        private void GetFloat(byte[] data, int byteNum, IVariable variable)
        {
            GetFloat(data, byteNum, variable as ModbusVariable<float>);
        }
        private void GetDouble(byte[] data, int byteNum, IVariable variable)
        {
            GetDouble(data, byteNum, variable as ModbusVariable<double>);
        }
        private void GetString(byte[] data, int byteNum, IVariable variable)
        {
            GetString(data, byteNum, variable as ModbusVariable<string>);
        }

        private void GetBool(byte[] data, int byteNum, ModbusVariable<bool> variable)
        {
            int bitNum = variable.Address.BitNum > 7 ? variable.Address.BitNum - 8 : variable.Address.BitNum;
            if (byteNum % 2 == 0)
            {
                ++byteNum;
            }
            else
            {
                --byteNum;
            }
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
        private void GetByte(byte[] data, int byteNum, ModbusVariable<byte> variable)
        {
            data[byteNum] = variable.Value;
        }
        private void GetShort(byte[] data, int byteNum, ModbusVariable<short> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void GetUShort(byte[] data, int byteNum, ModbusVariable<ushort> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void GetInt(byte[] data, int byteNum, ModbusVariable<int> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void GetUInt(byte[] data, int byteNum, ModbusVariable<uint> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void GetLong(byte[] data, int byteNum, ModbusVariable<long> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void GetULong(byte[] data, int byteNum, ModbusVariable<ulong> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void GetFloat(byte[] data, int byteNum, ModbusVariable<float> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void GetDouble(byte[] data, int byteNum, ModbusVariable<double> variable)
        {
            byte[] temp = ReverseData(BitConverter.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }
        private void GetString(byte[] data, int byteNum, ModbusVariable<string> variable)
        {
            byte[] temp = ReverseData(Encoding.ASCII.GetBytes(variable.Value));
            Array.Copy(temp, 0, data, byteNum, temp.Length);
        }

        private void SetBool(byte[] data, int byteNum, IVariable variable)
        {
            SetBool(data, byteNum, variable as ModbusVariable<bool>);
        }
        private void SetByte(byte[] data, int byteNum, IVariable variable)
        {
            SetByte(data, byteNum, variable as ModbusVariable<byte>);
        }
        private void SetShort(byte[] data, int byteNum, IVariable variable)
        {
            SetShort(data, byteNum, variable as ModbusVariable<short>);
        }
        private void SetUShort(byte[] data, int byteNum, IVariable variable)
        {
            SetUShort(data, byteNum, variable as ModbusVariable<ushort>);
        }
        private void SetInt(byte[] data, int byteNum, IVariable variable)
        {
            SetInt(data, byteNum, variable as ModbusVariable<int>);
        }
        private void SetUInt(byte[] data, int byteNum, IVariable variable)
        {
            SetUInt(data, byteNum, variable as ModbusVariable<uint>);
        }
        private void SetLong(byte[] data, int byteNum, IVariable variable)
        {
            SetLong(data, byteNum, variable as ModbusVariable<long>);
        }
        private void SetULong(byte[] data, int byteNum, IVariable variable)
        {
            SetULong(data, byteNum, variable as ModbusVariable<ulong>);
        }
        private void SetFloat(byte[] data, int byteNum, IVariable variable)
        {
            SetFloat(data, byteNum, variable as ModbusVariable<float>);
        }
        private void SetDouble(byte[] data, int byteNum, IVariable variable)
        {
            SetDouble(data, byteNum, variable as ModbusVariable<double>);
        }
        private void SetString(byte[] data, int byteNum, IVariable variable)
        {
            SetString(data, byteNum, variable as ModbusVariable<string>);
        }

        private void SetBool(byte[] data, int byteNum, ModbusVariable<bool> variable)
        {
            int bitNum = variable.Address.BitNum > 7 ? variable.Address.BitNum - 8 : variable.Address.BitNum;
            if (byteNum % 2 == 0)
            {
                ++byteNum;
            }
            else
            {
                --byteNum;
            }
            bool value = (data[byteNum] & (1 << bitNum)) != 0;
            variable.SetValue(value);
        }
        private void SetByte(byte[] data, int byteNum, ModbusVariable<byte> variable)
        {
            variable.SetValue(data[byteNum]);
        }
        private void SetShort(byte[] data, int byteNum, ModbusVariable<short> variable)
        {
            variable.SetValue(BitConverter.ToInt16(data.GetRange(byteNum, variable.Size), 0));
        }
        private void SetUShort(byte[] data, int byteNum, ModbusVariable<ushort> variable)
        {
            variable.SetValue(BitConverter.ToUInt16(data.GetRange(byteNum, variable.Size), 0));
        }
        private void SetInt(byte[] data, int byteNum, ModbusVariable<int> variable)
        {
            variable.SetValue(BitConverter.ToInt32(data.GetRange(byteNum, variable.Size), 0));
        }
        private void SetUInt(byte[] data, int byteNum, ModbusVariable<uint> variable)
        {
            variable.SetValue(BitConverter.ToUInt32(data.GetRange(byteNum, variable.Size), 0));
        }
        private void SetLong(byte[] data, int byteNum, ModbusVariable<long> variable)
        {
            variable.SetValue(BitConverter.ToInt64(data.GetRange(byteNum, variable.Size), 0));
        }
        private void SetULong(byte[] data, int byteNum, ModbusVariable<ulong> variable)
        {
            variable.SetValue(BitConverter.ToUInt64(data.GetRange(byteNum, variable.Size), 0));
        }
        private void SetFloat(byte[] data, int byteNum, ModbusVariable<float> variable)
        {
            variable.SetValue(BitConverter.ToSingle(data.GetRange(byteNum, variable.Size), 0));
        }
        private void SetDouble(byte[] data, int byteNum, ModbusVariable<double> variable)
        {
            variable.SetValue(BitConverter.ToDouble(data.GetRange(byteNum, variable.Size), 0));
        }
        private void SetString(byte[] data, int byteNum, ModbusVariable<string> variable)
        {
            variable.SetValue(Encoding.ASCII.GetString(data.GetRange(byteNum, variable.Size)));
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

        private void InitializeGSDict()
        {
            getDict.Add(typeof(bool),   GetBool);
            getDict.Add(typeof(byte),   GetByte);
            getDict.Add(typeof(short),  GetShort);
            getDict.Add(typeof(ushort), GetUShort);
            getDict.Add(typeof(int),    GetInt);
            getDict.Add(typeof(uint),   GetUInt);
            getDict.Add(typeof(long),   GetLong);
            getDict.Add(typeof(ulong),  GetULong);
            getDict.Add(typeof(float),  GetFloat);
            getDict.Add(typeof(double), GetDouble);
            getDict.Add(typeof(string), GetString);

            setDict.Add(typeof(bool),   SetBool);
            setDict.Add(typeof(byte),   SetByte);
            setDict.Add(typeof(short),  SetShort);
            setDict.Add(typeof(ushort), SetUShort);
            setDict.Add(typeof(int),    SetInt);
            setDict.Add(typeof(uint),   SetUInt);
            setDict.Add(typeof(long),   SetLong);
            setDict.Add(typeof(ulong),  SetULong);
            setDict.Add(typeof(float),  SetFloat);
            setDict.Add(typeof(double), SetDouble);
            setDict.Add(typeof(string), SetString);
        }
        #endregion

        private readonly IEnumerable<IVariable> variables;
        private byte[] source;
        private ModbusPackage parentPackage;

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
        public int SizeInBytes => Convert.ToInt32(Math.Ceiling(SizeInBits / 8D));
        public int CountVariables => (variables as List<IVariable>).Count;
        public IVariable Current => variables.GetEnumerator().Current;
        object IEnumerator.Current => variables.GetEnumerator().Current;

        public bool Disposed => disposedValue;

        public ModbusPackage()
        {
            variables = new List<IVariable>();
            getDict = new Dictionary<Type, Action<byte[], int, IVariable>>();
            setDict = new Dictionary<Type, Action<byte[], int, IVariable>>();

            parentPackage = null;

            InitializeGSDict();
        }

        public bool Contains(IVariable variable)
        {
            return variables.Contains(variable);
        }
        public ModbusPackage PackageVariable(IVariable variable)
        {
            ModbusPackage result = null;
            if (Contains(variable))
            {
                result = new ModbusPackage();
                result.Add(variable);
                result.parentPackage = this;
            }
            return result;
        }

        private void Initialize()
        {
            if (source == null)
            {
                if (parentPackage != null && (variables as List<IVariable>).Count > 0)
                {
                    int byteNum = GetByteNum((variables as List<IVariable>)[0].Address as ModbusAddress, parentPackage.StartRegister);
                    if ((variables as List<IVariable>)[0].GetValueType() == typeof(bool) || (variables as List<IVariable>)[0].GetValueType() == typeof(byte))
                    {
                        if (byteNum % 2 == 1)
                        {
                            --byteNum;
                        }
                    }
                    source = parentPackage.source.GetRange(byteNum, CountRegisters * 2).Reverse();
                }
                else 
                {
                    source = new byte[SizeInBytes];
                }
            }
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

        public byte[] GetData()
        {
            Initialize();
            byte[] result = new byte[CountVariables > 0 ? CountRegisters * 2 : 0];

            if (source.Length != result.Length)
                throw new ArgumentException($"Размер исходного массива не соответствует размеру пакета '{PackageId}'.");
            Array.Copy(source, 0, result, 0, result.Length);

            foreach (var variable in variables)
            {
                Get(result, variable);
            }
            return result;
        }
        public void SetData(byte[] data, int startIndex)
        {
            Initialize();
            Array.Copy(data, startIndex, source, 0, source.Length);
            (variables as List<IVariable>).ForEach(x => 
            {
                Set(data, x);
            });
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
