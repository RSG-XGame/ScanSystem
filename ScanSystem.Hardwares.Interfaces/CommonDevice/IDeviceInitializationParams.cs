using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.CommonDevice
{
    public interface IDeviceInitializationParams
    {
        Guid DeviceId { get; }
        IDeviceSettings Settings { get; }
    }
}
