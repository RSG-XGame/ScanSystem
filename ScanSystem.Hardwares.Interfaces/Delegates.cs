using ScanSystem.Hardwares.Interfaces.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces
{
    public delegate void DeviceMessageRecivedHandle(IDevice device, IDeviceMessage message);
    public delegate void DeviceConnectedHandle(IDevice device);
    public delegate void DeviceDisconnectedHandle(IDevice device);
    public delegate void DeviceErrorHandle(IDevice device, IDeviceError error);
    public delegate void DeviceRecivedDataHandle(IDevice device, byte[] data, int length);
}
