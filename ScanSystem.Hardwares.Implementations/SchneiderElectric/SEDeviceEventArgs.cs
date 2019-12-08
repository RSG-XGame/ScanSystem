using ScanSystem.Base.Interfaces;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using ScanSystem.Hardwares.Interfaces.Variables;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.SchneiderElectric
{
    public class SEDeviceEventArgs : IDeviceEventArgs
    {
        IDeviceRequest Request { get; }
        IDeviceResponse Response { get; }
    }
}
