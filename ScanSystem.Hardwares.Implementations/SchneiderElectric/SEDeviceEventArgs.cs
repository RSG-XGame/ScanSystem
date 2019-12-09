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
        public IRequest Request { get; internal set; }
        public IResponse Response { get; internal set; }
    }
}
