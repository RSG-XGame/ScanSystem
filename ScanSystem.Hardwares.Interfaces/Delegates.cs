using ScanSystem.Hardwares.Interfaces.CommonDevice;
using ScanSystem.Hardwares.Interfaces.Variables;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces
{
    /// <summary>
    /// Устройство подключается
    /// </summary>
    /// <param name="args">информация о подключающемся устройстве</param>
    public delegate void DeviceConnectingHandle(IDeviceEventArgs args);
    /// <summary>
    /// Устройство подключено
    /// </summary>
    /// <param name="device">Определение устройства</param>
    public delegate void DeviceConnectedHandle(IDevice device);

    /// <summary>
    /// Устройство отключается
    /// </summary>
    /// <param name="device">Определение устройства</param>
    public delegate void DeviceDisconnectingHandle(IDevice device);
    /// <summary>
    /// Устройство отключено
    /// </summary>
    /// <param name="device">Определение устройства</param>
    public delegate void DeviceDisconnectedHandle(IDevice device);

    /// <summary>
    /// Получено сообщение от устройства
    /// </summary>
    /// <param name="device">Определение устройства</param>
    /// <param name="args">Отфармотированное сообщение после чтения данных</param>
    public delegate void DeviceRecivedMessageHandle(IDevice device, IDeviceEventArgs args);

    /// <summary>
    /// При работе с устройством возникла ошибка
    /// </summary>
    /// <param name="device">Определение устройства</param>
    /// <param name="error">Данные об ошибке</param>
    public delegate void DeviceErrorHandle(IDevice device, IDeviceEventArgs args);

    /// <summary>
    /// Проверка состояния устройства
    /// </summary>
    /// <param name="device">Определение устройства</param>
    /// <param name="args">Данные по состоянию устройства</param>
    public delegate void DeviceCheckStateHandle(IDevice device, IDeviceEventArgs args);
}
