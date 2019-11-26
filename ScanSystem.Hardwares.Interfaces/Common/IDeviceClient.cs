using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Common
{
    public interface IDeviceClient : IDevice, IDisposable
    {
        event DeviceMessageRecivedHandle DeviceMessageRecived;
        event DeviceConnectedHandle DeviceConnected;
        event DeviceDisconnectedHandle DeviceDisconnected;
        event DeviceErrorHandle DeviceError;

        Guid DeviceId { get; }
        bool Connected { get; }
        bool Busy { get; }

        bool StartListen();
        bool StopListen();
    }
}
