using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.Arguments
{
    public class DeviceErrorEventArgs : IDeviceEventArgs
    {
        public Exception Ex { get; internal set; }
    }
}
