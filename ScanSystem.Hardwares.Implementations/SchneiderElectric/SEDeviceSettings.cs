using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.SchneiderElectric
{
    public class SEDeviceSettings : IDeviceSettings
    {
        public string IPAddress { get; set; }
        public int Port { get; set; }

        public List<SEVeriableDescription> Variables { get; set; } = new List<SEVeriableDescription>();
    }
}
