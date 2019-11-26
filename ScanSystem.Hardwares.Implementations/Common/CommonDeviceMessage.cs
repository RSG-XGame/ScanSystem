using ScanSystem.Hardwares.Interfaces.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.Common
{
    public class CommonDeviceMessage : IDeviceMessage
    {
        public string Message { get; internal set; }
    }
}
