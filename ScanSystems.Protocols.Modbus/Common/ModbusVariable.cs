using ScanSystem.Hardwares.Interfaces;
using ScanSystem.Hardwares.Interfaces.Variables;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Text;

namespace ScanSystems.Protocols.Modbus.Common
{
    public class ModbusVariable<TType> : IVariable<TType, ModbusAddress>
        where TType : IComparable, IComparable<TType>, IConvertible, IEquatable<TType>
    {
        private TType value;
        private string name;
        private int size;
        private readonly ModbusAddress address;

        public bool Disposed => disposedValue;
        public TType Value
        {
            get
            {
                return value;
            }
            set
            {
                if (!disposedValue)
                {
                    if (!value.Equals(value))
                    {
                        PropertyChanging?.Invoke(this, new PropertyChangingEventArgs(nameof(Value)));
                        this.value = value;
                        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Value)));
                    }
                }
            }
        }
        public string Name => name;
        public int Size => size;
        public ModbusAddress Address => address;

        IAddress IVariable.Address => address;
        object IVariable.Value { get => Value; set => Value = (TType)value; }

        public event PropertyChangingEventHandler PropertyChanging;
        public event PropertyChangedEventHandler PropertyChanged;
        public event DisposingHandler Disposing;

        public ModbusVariable()
        {
            address = new ModbusAddress();
        }

        public void Initialize(string name, string address = "%MW0", int size = 0)
        {
            this.name = name;
            Address.Address = address;
            this.size = size;
        }

        public Type GetValueType()
        {
            return typeof(TType);
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

        // TODO: переопределить метод завершения, только если Dispose(bool disposing) выше включает код для освобождения неуправляемых ресурсов.
        // ~ModbusVariable() {
        //   // Не изменяйте этот код. Разместите код очистки выше, в методе Dispose(bool disposing).
        //   Dispose(false);
        // }

        // Этот код добавлен для правильной реализации шаблона высвобождаемого класса.
        public void Dispose()
        {
            Disposing?.Invoke(this);
            // Не изменяйте этот код. Разместите код очистки выше, в методе Dispose(bool disposing).
            Dispose(true);
            // TODO: раскомментировать следующую строку, если метод завершения переопределен выше.
            // GC.SuppressFinalize(this);
        }
        #endregion
    }
}
