using ScanSystem.Hardwares.Interfaces;
using ScanSystem.Hardwares.Interfaces.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.PLC.Modbus
{
    public class ModbusClient : IDeviceClient
    {
        public Guid DeviceId => throw new NotImplementedException();

        public bool Connected => throw new NotImplementedException();

        public bool Busy => throw new NotImplementedException();

        public event DeviceMessageRecivedHandle DeviceMessageRecived;
        public event DeviceConnectedHandle DeviceConnected;
        public event DeviceDisconnectedHandle DeviceDisconnected;
        public event DeviceErrorHandle DeviceError;

        public bool StartListen()
        {
            throw new NotImplementedException();
        }

        public bool StopListen()
        {
            throw new NotImplementedException();
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
        // ~ModbusConnection()
        // {
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
