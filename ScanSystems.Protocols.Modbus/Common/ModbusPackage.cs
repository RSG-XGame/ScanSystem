using ScanSystem.Hardwares.Interfaces.Variables;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ScanSystems.Protocols.Modbus.Common
{
    public class ModbusPackage : IEnumerator<IVariable>
    {
        private readonly IEnumerable<IVariable> variables;

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

        public int MaxSizeInBits => 240 * 8;
        public int SizeInBits => (variables as List<IVariable>).Sum(x => (x.Address as ModbusAddress).CountBits);
        public int CountVariables => (variables as List<IVariable>).Count;
        public IVariable Current => variables.GetEnumerator().Current;
        object IEnumerator.Current => variables.GetEnumerator().Current;

        public ModbusPackage()
        {
            variables = new List<IVariable>();
        }

        public bool Add(IVariable variable)
        {
            bool result = false;

            if (!variables.Contains(variable) && ((variables as List<IVariable>).Count == 0 || (variables as List<IVariable>)[(variables as List<IVariable>).Count - 1].Address.Union(variable.Address)))
            {
                variable.Disposing += Variable_Disposing;
                (variables as List<IVariable>).Add(variable);
                result = true;
            }

            return result;
        }

        public byte[] GetData()
        {
            byte[] result = new byte[CountVariables > 0 ? CountRegisters : 0];

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
