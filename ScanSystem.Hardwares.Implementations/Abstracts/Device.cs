using ScanSystem.Hardwares.Implementations.Arguments;
using ScanSystem.Hardwares.Interfaces;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ScanSystem.Hardwares.Implementations.Abstracts
{
    public abstract class Device : IDevice
    {
        private ManualResetEvent resetWait;
        private CancellationTokenSource cancelToken;
        protected TcpClient client;

        public bool Disposed => disposedValue;

        public Guid DeviceId { get; private set; }
        public IDeviceSettings Settings { get; private set; }
        public bool Busy => !resetWait.WaitOne(0);

        public event DeviceConnectingHandler DeviceConnecting;
        public event DeviceConnectedHandler DeviceConnected;
        public event DeviceDisconnectingHandler DeviceDisconnecting;
        public event DeviceDisconnectedHandler DeviceDisconnected;
        public event DeviceRecivedMessageHandler DeviceRecivedMessage;
        public event DeviceErrorHandler DeviceError;
        public event DeviceCheckStateHandler DeviceCheckState;

        protected bool IsCanceled => cancelToken.IsCancellationRequested;

        public virtual void Initialization(IDeviceInitializationParams initParams)
        {
            Settings = initParams.Settings;
            resetWait = new ManualResetEvent(true);
        }
        public void Reinitialization(IDeviceInitializationParams initParams)
        {
            if (Settings.Equals(initParams))
            {
                bool isBusy = Busy;
                Close();
                Settings = initParams.Settings;
                resetWait = new ManualResetEvent(true);
                if (isBusy) Open();
                Initialization(initParams);
            }
        }
        protected abstract void Connect();
        protected abstract void Disconnect();
        public abstract bool SendRequest(IDeviceRequest request);

        public bool Open()
        {
            bool result = false;
            try
            {
                if (!Busy)
                {
                    DeviceConnectingEventArgs args = new DeviceConnectingEventArgs { IPAddress = Settings.IPAddress, AcceptConnection = true };
                    DeviceConnecting?.Invoke(args);
                    if (args.AcceptConnection)
                    {
                        if (client == null)
                        {
                            client = new TcpClient();
                        }
                        if (!client.Connected)
                        {
                            client.SendTimeout = Settings.SendTimeout;
                            client.ReceiveTimeout = Settings.ReciveTimeout;
                            client.SendBufferSize = Settings.SendBufferSize;
                            client.ReceiveBufferSize = Settings.ReciveBufferSize;
                            client.Connect(IPAddress.Parse(Settings.IPAddress), Settings.Port);
                        }
                        result = StartListen();
                        Connect();
                        DeviceConnected?.Invoke(this);
                    }
                }
            }
            catch (Exception ex)
            {
                DeviceError?.Invoke(this, new DeviceErrorEventArgs { Ex = ex });
            }
            return result;
        }
        public bool Close()
        {
            bool result = false;
            if (Busy)
            {
                Disconnection();
            }
            return result;
        }

        private void Disconnection()
        {
            DeviceDisconnecting?.Invoke(this);
            Disconnect();
            client?.Close();
            StopListen();
            DeviceDisconnected?.Invoke(this);
        }

        private bool StartListen()
        {
            bool result = false;
            cancelToken = new CancellationTokenSource();
            Task.Run(() => { Listen(cancelToken.Token); });
            result = true;
            return result;
        }
        private bool StopListen()
        {
            bool result = false;
            cancelToken?.Cancel();
            resetWait.WaitOne();
            cancelToken?.Dispose();
            cancelToken = null;
            return result;
        }

        private void Listen(CancellationToken token)
        {
            DeviceStateEventArgs state = new DeviceStateEventArgs { IsEnabled = true };
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
                        try
                        {
                            IDeviceEventArgs message = RecivedData(buffer, length);
                            if (message != null)
                                DeviceRecivedMessage?.Invoke(this, message);
                        }
                        catch (Exception ex)
                        {
                            DeviceError?.Invoke(this, new DeviceErrorEventArgs { Ex = ex });
                        }
                    }

                    DeviceCheckState?.Invoke(this, state);
                    if (!state.IsEnabled)
                    {
                        break;
                    }
                }
            }
            catch(Exception ex)
            {
                DeviceError?.Invoke(this, new DeviceErrorEventArgs { Ex = ex });
            }
            finally
            {
                resetWait.Set();
            }
            if (state.IsEnabled)
            {
                Disconnection();
            }
        }

        /// <summary>
        /// Считаны данные из потока
        /// </summary>
        /// <param name="data">Массив считанных байт</param>
        /// <param name="args"></param>
        protected abstract IDeviceEventArgs RecivedData(byte[] data, int length);

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
        // ~Device()
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
