using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.CommonDevice
{
    public interface IDevice : IDisposable
    {
        Guid DeviceId { get; }
        IDeviceSettings Settings { get; }
        bool Busy { get; }

        event DeviceConnectingHandle DeviceConnecting;
        event DeviceConnectedHandle DeviceConnected;

        event DeviceDisconnectingHandle DeviceDisconnecting;
        event DeviceDisconnectedHandle DeviceDisconnected;

        event DeviceRecivedMessageHandle DeviceRecivedMessage;

        event DeviceErrorHandle DeviceError;

        event DeviceCheckStateHandle DeviceCheckState;

        void Initialization(IDeviceInitializationParams initParams);

        /// <summary>
        /// Отключиться от устройства
        /// </summary>
        /// <returns></returns>
        bool Connect();
        /// <summary>
        /// Подключиться к устройству
        /// </summary>
        /// <returns></returns>
        bool Disconnect();

        /// <summary>
        /// Отправить запрос на устройство
        /// </summary>
        /// <param name="request">Запрос</param>
        /// <returns>True - если удалось отправить запрос, иначе False</returns>
        bool SendRequest(IDeviceRequest request);
    }
}
