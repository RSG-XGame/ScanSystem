using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DataLogic.Emulator
{
    internal class DataLogicClient : IDisposable
    {
        private TcpClient client;
        private ManualResetEvent handler;
        private CancellationTokenSource cancelToken;

        public int TimeoutCycle { get; set; }
        public string IPAddress { get; set; }
        public int Port { get; set; }
        public bool Busy => !handler.WaitOne(0);

        public DataLogicClient()
        {
            handler = new ManualResetEvent(true);
            TimeoutCycle = 1000;
        }

        public void Start()
        {
            if (!Busy)
            {
                handler.Reset();
                cancelToken = new CancellationTokenSource();
                Task.Run(() => { Emulator(cancelToken.Token); });
            }
        }

        public void Stop()
        {
            if (Busy)
            {
                cancelToken.Cancel();
                
                handler.WaitOne();
                
                client?.Close();
                
                client?.Dispose();
                cancelToken.Dispose();
                
                client = null;
                cancelToken = null;
            }
        }

        private void Emulator(CancellationToken token)
        {
            NetworkStream stream = null;
            while(!token.IsCancellationRequested)
            {
                try
                {
                    if (!client?.Connected ?? true)
                    {
                        client?.Close();
                        client?.Dispose();

                        client = new TcpClient();
                        client.Connect(IPAddress, Port);
                        stream = client.GetStream();
                    }

                    if (client.Connected)
                    {
                        byte[] data = Encoding.Unicode.GetBytes(GenerateString());
                        stream.Write(data, 0, data.Length);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"#ERROR {DateTime.Now}: {ex}");
                    client?.Close();
                    client?.Dispose();
                    client = null;
                }
                finally
                {
                }
                Thread.Sleep(TimeoutCycle);
            }
            handler.Set();
        }

        private string GenerateString()
        {
            return "" + RandomDigit();
        }

        private IEnumerator<char> RandomDigit()
        {
            Random rand = new Random();
            for (int i = 0; i < 10; ++i)
            {
                yield return (char)(48 + rand.Next(0, 10));
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
                    // TODO: освободить управляемое состояние (управляемые объекты).
                    handler.Dispose();
                }

                // TODO: освободить неуправляемые ресурсы (неуправляемые объекты) и переопределить ниже метод завершения.
                // TODO: задать большим полям значение NULL.

                disposedValue = true;
            }
        }

        // TODO: переопределить метод завершения, только если Dispose(bool disposing) выше включает код для освобождения неуправляемых ресурсов.
        // ~DataLogicClient()
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
