using ScanSystem.Hardwares.Interfaces.Variables;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;

namespace ScanSystems.Protocols.Modbus.Common
{
    public class ModbusProtocol : IProtocol
    {
        private List<IVariable> variables;
        private object locker;
        
        public int Count => variables.Count;
        public bool IsReadOnly => (variables as IList).IsReadOnly;
        public bool Disposed => disposedValue;

        public ModbusProtocol()
        {
            variables = new List<IVariable>();
            locker = new object();
        }

        public void Add(IVariable item)
        {
            if (!disposedValue)
            {
                lock (locker)
                {
                    variables.Add(item);
                }
            }
        }
        public void Clear()
        {
            if (!disposedValue)
            {
                lock (locker)
                {
                    variables.Clear();
                }
            }
        }
        public bool Contains(IVariable item)
        {
            return variables.Contains(item);
        }
        public void CopyTo(IVariable[] array, int arrayIndex)
        {
            variables.CopyTo(array, arrayIndex);
        }
        public IEnumerator<IVariable> GetEnumerator()
        {
            return variables.GetEnumerator();
        }
        public bool Remove(IVariable item)
        {
            bool result = false;
            if (!disposedValue)
            {
                lock (locker)
                {
                    result = variables.Remove(item);
                }
            }
            return result;
        }
        public bool Write<TType>(IVariable<TType> variable) 
            where TType : IComparable, IComparable<TType>, IConvertible, IEquatable<TType>
        {
            throw new NotImplementedException();
        }
        public TType Read<TType>(IVariable<TType> variable) 
            where TType : IComparable, IComparable<TType>, IConvertible, IEquatable<TType>
        {
            throw new NotImplementedException();
        }
        IEnumerator IEnumerable.GetEnumerator()
        {
            return variables.GetEnumerator();
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
        // ~ModbusProtocol() {
        //   // Не изменяйте этот код. Разместите код очистки выше, в методе Dispose(bool disposing).
        //   Dispose(false);
        // }

        // Этот код добавлен для правильной реализации шаблона высвобождаемого класса.
        public void Dispose()
        {
            // Не изменяйте этот код. Разместите код очистки выше, в методе Dispose(bool disposing).
            Dispose(true);
            // TODO: раскомментировать следующую строку, если метод завершения переопределен выше.
            // GC.SuppressFinalize(this);
        }
        #endregion
    }
}
