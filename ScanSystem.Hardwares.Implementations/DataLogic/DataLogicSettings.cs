using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.DataLogic
{
    public class DataLogicSettings : IDeviceSettings
    {
        public string IPAddress { get; set; }
        public int Port { get; set; }

        public string BeginSplitter { get; set; }
        public string EndSplitter { get; set; }
    }
}
