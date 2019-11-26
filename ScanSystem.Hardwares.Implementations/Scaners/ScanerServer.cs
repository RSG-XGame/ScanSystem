using ScanSystem.Hardwares.Interfaces;
using ScanSystem.Hardwares.Interfaces.Common;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

namespace ScanSystem.Hardwares.Implementations.Scaners
{
    public class ScanerServer : IDeviceServer
    {
        private CancellationTokenSource cancelListen;
        private TcpListener listener;
        private List<ScanerClient> clients;
        private ManualResetEvent resetWait;
        private Func<string, IDeviceSettings> getDevice;

        private object clientsLocker;

        public event DeviceMessageRecivedHandle DeviceMessageRecived;
        public event DeviceConnectedHandle DeviceConnected;
        public event DeviceDisconnectedHandle DeviceDisconnected;
        public event DeviceErrorHandle DeviceError;

        public string IPAddress { get; set; }
        public int Port { get; set; }
        public bool Busy => !resetWait.WaitOne(0);

        public ScanerServer()
        {
            Initialization();
        }

        private void Initialization()
        {
            clients = new List<ScanerClient>();
            resetWait = new ManualResetEvent(true);
            clientsLocker = new object();
        }

        public bool StartListen(Func<string, IDeviceSettings> getDevice)
        {
            bool result = false;
            if (!Busy)
            {
                this.getDevice = getDevice;
            }
            return result;
        }

        public bool StopListen()
        {
            bool result = false;
            cancelListen?.Cancel();
            return result;
        }

        public bool DisconnectClientByIP(string ipAddress)
        {
            bool result = true;
            lock (clientsLocker)
            {
                ScanerClient client = clients.Find(x => x.Settings.IPAddress == ipAddress);
                client.Settings.IsEnabled = false;
                client.StopListen();
            }
            return result;
        }

        private void Listen(CancellationToken token)
        {
            try
            {
                resetWait.Reset();
                listener = new TcpListener(System.Net.IPAddress.Parse(IPAddress), Port);
                listener.Start();
                while (!token.IsCancellationRequested)
                {
                    AcceptNewClient();
                }
            }
            catch (Exception ex)
            {
                DeviceError?.Invoke(this, new CommonDeviceError { FullException = ex, ExceptionCreateDate = DateTime.Now });
            }
            finally
            {
                DisconnectAllClients();
                listener?.Stop();
                resetWait.Set();
            }
        }

        private void AcceptNewClient()
        {
            try
            {
                TcpClient tcpClient = listener.AcceptTcpClient();
                string ipAddress = (tcpClient.Client.RemoteEndPoint as IPEndPoint).Address.ToString();
                ScanerSettings settings = getDevice(ipAddress) as ScanerSettings;
                if (settings.IsEnabled)
                {
                    ScanerClient client = new ScanerClient();
                    client.Initialization(settings, tcpClient);
                    client.DeviceConnected += Client_DeviceConnected;
                    client.DeviceDisconnected += Client_DeviceDisconnected;
                    client.DeviceError += Client_DeviceError;
                    client.DeviceMessageRecived += Client_DeviceMessageRecived;
                    client.StartListen();
                }
                else
                {
                    tcpClient.Close();
                    tcpClient.Dispose();
                    tcpClient = null;
                }
            }
            catch (Exception ex)
            {
                DeviceError?.Invoke(this, new CommonDeviceError { FullException = ex, ExceptionCreateDate = DateTime.Now });
            }
        }

        private void Client_DeviceMessageRecived(IDevice device, IDeviceMessage message)
        {
            DeviceMessageRecived?.Invoke(device, message);
        }

        private void Client_DeviceError(IDevice device, IDeviceError error)
        {
            DeviceError?.Invoke(device, error);
            if (error.Disconnect)
            {
                ScanerClient client = device as ScanerClient;
                client.Settings.IsEnabled = false;
                client.StopListen();
            }
        }

        private void Client_DeviceDisconnected(IDevice device)
        {
            ScanerClient client = device as ScanerClient;
            lock (clientsLocker)
            {
                clients.Remove(client);
                client.Dispose();
                client = null;
            }
        }

        private void Client_DeviceConnected(IDevice device)
        {
            lock (clientsLocker)
            {
                ScanerClient client = device as ScanerClient;
                clients.Add(client);
            }
        }

        private void DisconnectAllClients()
        {
            foreach (var client in clients)
            {
                client.StopListen();
                client.Dispose();
            }
            clients.Clear();
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
                }

                // TODO: освободить неуправляемые ресурсы (неуправляемые объекты) и переопределить ниже метод завершения.
                // TODO: задать большим полям значение NULL.

                clientsLocker = null;

                disposedValue = true;
            }
        }

        // TODO: переопределить метод завершения, только если Dispose(bool disposing) выше включает код для освобождения неуправляемых ресурсов.
        // ~ScanerServer()
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
