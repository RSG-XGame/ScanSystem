using ScanSystem.Hardwares.Interfaces;
using ScanSystem.Hardwares.Interfaces.Common;
using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ScanSystem.Hardwares.Implementations.Common
{
    public abstract class CommonDeviceClient : IDeviceClient
    {
        private CancellationTokenSource cancelListen;
        private ManualResetEvent resetWait;
        private TcpClient client;

        public Guid DeviceId { get; private set; }
        public bool Connected => client?.Connected ?? false;
        public bool Busy => !resetWait.WaitOne(0);

        public abstract event DeviceMessageRecivedHandle DeviceMessageRecived;
        public event DeviceConnectedHandle DeviceConnected;
        public event DeviceDisconnectedHandle DeviceDisconnected;
        public event DeviceErrorHandle DeviceError;

        protected event DeviceRecivedDataHandle DeviceRecivedData;

        public CommonDeviceClient()
        {
            resetWait = new ManualResetEvent(true);
        }

        public void Initialize(TcpClient client)
        {
            this.client = client;
        }

        public bool StartListen()
        {
            bool result = false;
            if (!Busy)
            {
                cancelListen = new CancellationTokenSource();
                Task.Run(() => { Listen(cancelListen.Token); });
                DeviceConnected?.Invoke(this);
            }
            return result;
        }

        public bool StopListen()
        {
            cancelListen?.Cancel();
            bool result = resetWait?.WaitOne() ?? true;
            return result;
        }

        private void Listen(CancellationToken token)
        {
            try
            {
                resetWait.Reset();
                NetworkStream stream = client.GetStream();
                while (!token.IsCancellationRequested)
                {
                    if (stream.DataAvailable)
                    {
                        byte[] buffer = new byte[client.ReceiveBufferSize];
                        int length = stream.Read(buffer, 0, buffer.Length);
                        DeviceRecivedData?.Invoke(this, buffer, length);
                    }
                }
            }
            catch (Exception ex)
            {
                DeviceError?.Invoke(this, new CommonDeviceError { FullException = ex, ExceptionCreateDate = DateTime.Now });
            }
            finally
            {
                client?.Close();
                DeviceDisconnected?.Invoke(this);
                resetWait.Set();
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
                    StopListen();
                    resetWait.WaitOne();
                    cancelListen.Dispose();
                    client.Dispose();

                }

                // TODO: освободить неуправляемые ресурсы (неуправляемые объекты) и переопределить ниже метод завершения.
                // TODO: задать большим полям значение NULL.

                client = null;
                cancelListen = null;
                disposedValue = true;
            }
        }

        // TODO: переопределить метод завершения, только если Dispose(bool disposing) выше включает код для освобождения неуправляемых ресурсов.
        // ~ScanerClient()
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
