using ScanSystem.Hardwares.Implementations.Common;
using ScanSystem.Hardwares.Interfaces;
using ScanSystem.Hardwares.Interfaces.Common;
using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ScanSystem.Hardwares.Implementations.Scaners
{
    public class ScanerClient : CommonDeviceClient
    {
        public override event DeviceMessageRecivedHandle DeviceMessageRecived;

        public ScanerSettings Settings { get; private set; }

        public ScanerClient()
        {
        }

        public void Initialization(ScanerSettings settings, TcpClient client)
        {
            DeviceRecivedData += ScanerClient_DeviceRecivedData;
            DeviceId = settings.ScanerId;
            Settings = settings;
            Client = client;
        }

        private void ScanerClient_DeviceRecivedData(IDevice device, byte[] data, int length)
        {
            string message = Encoding.UTF8.GetString(data, 0, length);
            string[] messages = message.Split(new string[] { Settings.BeginSplitter ?? "", Settings.EndSplitter ?? "" }, StringSplitOptions.RemoveEmptyEntries);
            foreach (var msg in messages)
            {
                CommonDeviceMessage rm = new CommonDeviceMessage { Message = msg };
                DeviceMessageRecived?.Invoke(device, rm);
            }
        }
    }
}
