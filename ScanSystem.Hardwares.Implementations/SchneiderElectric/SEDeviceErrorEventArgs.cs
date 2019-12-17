using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.SchneiderElectric
{
    public class SEDeviceErrorEventArgs : IDeviceEventArgs
    {
        public int ErrorCode { get; internal set; }
        public string Description { get; internal set; }
    }
}
