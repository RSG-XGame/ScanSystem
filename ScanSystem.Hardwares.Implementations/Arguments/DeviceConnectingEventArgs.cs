using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.Arguments
{
    public class DeviceConnectingEventArgs : IDeviceEventArgs
    {
        public string IPAddress { get; internal set; }
    }
}
