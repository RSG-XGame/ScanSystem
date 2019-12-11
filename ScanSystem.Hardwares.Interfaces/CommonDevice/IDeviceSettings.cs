using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.CommonDevice
{
    public interface IDeviceSettings : IEquatable<IDeviceSettings>
    {
        string IPAddress { get; set; }
        int Port { get; set; }
        int SendTimeout { get; set; }
        int ReciveTimeout { get; set; }
        int SendBufferSize { get; set; }
        int ReciveBufferSize { get; set; }
    }
}
