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

        public string BeginSplitter { get; set; }
        public string EndSplitter { get; set; }

        public ScanerClient()
        {
            Initialization();
        }

        private void Initialization()
        {
            DeviceRecivedData += ScanerClient_DeviceRecivedData;
        }

        private void ScanerClient_DeviceRecivedData(IDeviceClient device, byte[] data, int length)
        {
            string message = Encoding.UTF8.GetString(data, 0, length);
            string[] messages = message.Split(new string[] { BeginSplitter ?? "", EndSplitter ?? "" }, StringSplitOptions.RemoveEmptyEntries);
            foreach (var msg in messages)
            {
                CommonDeviceMessage rm = new CommonDeviceMessage { Message = msg };
                DeviceMessageRecived?.Invoke(device, rm);
            }
        }
    }
}
