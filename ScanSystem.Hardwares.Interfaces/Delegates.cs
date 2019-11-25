using ScanSystem.Hardwares.Interfaces.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces
{
    public delegate void DeviceMessageRecivedHandle(IDeviceClient device, IDeviceMessage message);
    public delegate void DeviceConnectedHandle(IDeviceClient device);
    public delegate void DeviceDisconnectedHandle(IDeviceClient device);
    public delegate void DeviceErrorHandle(IDeviceClient device, IDeviceError error);
}
