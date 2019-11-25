using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.PLC.Modbus
{
    public enum ModbusErrors
    {
        /// <summary>
        /// Ошибок нет
        /// </summary>
        NoErorr = 0,
        /// <summary>
        /// Принятый код функции не может быть обработан.
        /// </summary>
        ReceivedFunctionCodeCouldNotBeProcessed = 1,
        /// <summary>
        /// Адрес данных, указанный в запросе, недоступен.
        /// </summary>
        DataAddressSpecifiedInRequestIsNotAvailable = 2,
        /// <summary>
        /// Значение, содержащееся в поле данных запроса, является недопустимой величиной.
        /// </summary>
        ValueContainedInRequestDataFieldIsNotValidValue = 3,
        /// <summary>
        /// Невосстанавливаемая ошибка имела место, пока ведомое устройство пыталось выполнить затребованное действие.
        /// </summary>
        UnrecoverableErrorOccurred = 4,
        /// <summary>
        /// Ведомое устройство приняло запрос и обрабатывает его, но это требует много времени.Этот ответ предохраняет ведущее устройство от генерации ошибки тайм-аута.
        /// </summary>
        ThisResponsePreventsMasterFromGeneratingTimeoutError = 5,
        /// <summary>
        /// Ведомое устройство занято обработкой команды.Ведущее устройство должно повторить сообщение позже, когда ведомое освободится.
        /// </summary>
        SlaveIsBusyProcessingCommand = 6,
        /// <summary>
        /// Ведомое устройство не может выполнить программную функцию, заданную в запросе.Этот код возвращается для неуспешного программного запроса, использующего функции с номерами 13 или 14. Ведущее устройство должно запросить диагностическую информацию или информацию об ошибках от ведомого.
        /// </summary>
        SlaveCannotExecuteProgramFunction = 7,
        /// <summary>
        /// Ведомое устройство при чтении расширенной памяти обнаружило ошибку паритета.Ведущее устройство может повторить запрос, но обычно в таких случаях требуется ремонт.
        /// </summary>
        SlaveEncounteredParityErrorWhileReadingExtendedMemory = 8,
        /// <summary>
        /// Шлюз неправильно настроен или перегружен запросами.
        /// </summary>
        GatewayIsIncorrectlyConfiguredOrIsOverloadedWithRequests = 10,
        /// <summary>
        /// Slave устройства нет в сети или от него нет ответа.
        /// </summary>
        TheDeviceSlaveIsOfflineOrThereIsNoResponseFromIt = 11,
    }
}
