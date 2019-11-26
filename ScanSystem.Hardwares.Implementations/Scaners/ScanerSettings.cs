using ScanSystem.Hardwares.Interfaces.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.Scaners
{
    public class ScanerSettings : IDeviceSettings
    {
        public Guid ScanerId{ get; set; }
        public string IPAddress { get; set; }
        public string BeginSplitter { get; set; }
        public string EndSplitter { get; set; }
        public bool IsEnabled { get; set; }
    }
}
