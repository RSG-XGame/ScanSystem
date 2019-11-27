using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.Arguments
{
    public class DeviceStateEventArgs : IDeviceEventArgs
    {
        public bool IsEnabled { get; internal set; }
    }
}
