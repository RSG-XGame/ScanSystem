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
        /// Запуск прослушивания устройства
        /// </summary>
        /// <returns>True - если удалось запустить, иначе False</returns>
        bool StartListen();
        /// <summary>
        /// остановить прослушивание устройства
        /// </summary>
        /// <returns>True - если удалось остановить, иначе False</returns>
        bool StopListen();

        /// <summary>
        /// Отправить запрос на устройство
        /// </summary>
        /// <param name="request">Запрос</param>
        /// <returns>True - если удалось отправить запрос, иначе False</returns>
        bool SendRequest(IDeviceRequest request);
    }
}
