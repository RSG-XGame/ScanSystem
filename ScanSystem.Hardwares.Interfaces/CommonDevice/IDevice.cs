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

        bool Disposed { get; }

        event DeviceConnectingHandler DeviceConnecting;
        event DeviceConnectedHandler DeviceConnected;

        event DeviceDisconnectingHandler DeviceDisconnecting;
        event DeviceDisconnectedHandler DeviceDisconnected;

        event DeviceRecivedMessageHandler DeviceRecivedMessage;

        event DeviceErrorHandler DeviceError;

        event DeviceCheckStateHandler DeviceCheckState;

        void Initialization(IDeviceInitializationParams initParams);
        void Reinitialization(IDeviceInitializationParams initParams);

        /// <summary>
        /// Отключиться от устройства
        /// </summary>
        /// <returns></returns>
        bool Open();
        /// <summary>
        /// Подключиться к устройству
        /// </summary>
        /// <returns></returns>
        bool Close();

        /// <summary>
        /// Отправить запрос на устройство
        /// </summary>
        /// <param name="request">Запрос</param>
        /// <returns>True - если удалось отправить запрос, иначе False</returns>
        bool SendRequest(IDeviceRequest request);
    }
}
