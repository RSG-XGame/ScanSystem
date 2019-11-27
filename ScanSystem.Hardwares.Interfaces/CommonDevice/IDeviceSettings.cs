using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.CommonDevice
{
    public interface IDeviceSettings
    {
        string IPAddress { get; set; }
        int Port { get; set; }
    }
}
