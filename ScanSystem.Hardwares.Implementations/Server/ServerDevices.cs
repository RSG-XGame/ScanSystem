using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace ScanSystem.Hardwares.Implementations.Server
{
    public class ServerDevices : IServerDevices
    {
        private ManualResetEvent reset;
        private IList<IDevice> devices;

        public bool Running
        {
            get
            {
                if (disposedValue)
                    throw new ObjectDisposedException(nameof(ServerDevices));
                return !reset.WaitOne(0);
            }
        }

        public ServerDevices()
        {
            reset = new ManualResetEvent(true);
            devices = new List<IDevice>();
        }


        public void Clear()
        {
            if (disposedValue)
                throw new ObjectDisposedException(nameof(ServerDevices));
            (devices as List<IDevice>).ForEach(x =>
            {
                x.Close();
                x.Dispose();
            });
            devices.Clear();
        }

        public void RegisterDevice(IDevice device)
        {
            if (disposedValue)
                throw new ObjectDisposedException(nameof(ServerDevices));
            devices.Add(device);
        }

        public void RemoveDevice(IDevice device)
        {
            if (disposedValue)
                throw new ObjectDisposedException(nameof(ServerDevices));
            devices.Remove(device);
        }

        public void Start()
        {
            if (disposedValue)
                throw new ObjectDisposedException(nameof(ServerDevices));
            if (!Running)
            {
                reset.Reset();
                (devices as List<IDevice>).ForEach(x =>
                {
                    if (!x.Disposed)
                    {
                        x.Open();
                    }
                });
            }
        }

        public void Stop()
        {
            if (disposedValue)
                throw new ObjectDisposedException(nameof(ServerDevices));
            if (Running)
            {
                (devices as List<IDevice>).ForEach(x =>
                {
                    if (!x.Disposed)
                    {
                        x.Close();
                    }
                });
                reset.Set();
            }
        }

        #region IDisposable Support
        private bool disposedValue = false; // Для определения избыточных вызовов

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    Stop();
                    Clear();

                    // TODO: освободить управляемое состояние (управляемые объекты).
                }

                // TODO: освободить неуправляемые ресурсы (неуправляемые объекты) и переопределить ниже метод завершения.
                // TODO: задать большим полям значение NULL.

                disposedValue = true;
            }
        }

        // TODO: переопределить метод завершения, только если Dispose(bool disposing) выше включает код для освобождения неуправляемых ресурсов.
        // ~ServerDevices()
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
