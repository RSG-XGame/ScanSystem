using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Common
{
    public interface IDeviceServer : IDevice, IDisposable
    {
        event DeviceMessageRecivedHandle DeviceMessageRecived;
        event DeviceConnectedHandle DeviceConnected;
        event DeviceDisconnectedHandle DeviceDisconnected;
        event DeviceErrorHandle DeviceError;

        bool StartListen();
        bool StopListen();
    }
}
