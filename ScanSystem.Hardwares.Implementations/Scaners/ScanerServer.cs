﻿using ScanSystem.Hardwares.Interfaces;
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
        }

        public bool StartListen(Func<)
        {
            bool result = false;

            return result;
        }

        public bool StopListen()
        {
            bool result = false;
            cancelListen?.Cancel();
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


            }
            catch (Exception ex)
            {
                DeviceError?.Invoke(this, new CommonDeviceError { FullException = ex, ExceptionCreateDate = DateTime.Now });
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
