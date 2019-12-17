using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystems.Protocols.Modbus
{
    [Flags]
    public enum ModbusFunctions
    {
        /// <summary>
        /// Чтение DO / Дискретное / Чтение
        /// </summary>
        ReadCoilStatus = 0x01,
        /// <summary>
        /// Чтение DI / Дискретное / Чтение
        /// </summary>
        ReadInputStatus = 0x02,
        /// <summary>
        /// Чтение AO / 16 битное / Чтение
        /// </summary>
        ReadHoldingRegisters = 0x03,
        /// <summary>
        /// Чтение AI / 16 битное / Чтение
        /// </summary>
        ReadInputRegisters = 0x04,
        /// <summary>
        /// Запись одного DO / Дискретное / Запись
        /// </summary>
        ForceSingleCoil = 0x05,
        /// <summary>
        /// Запись одного AO / 16 битное / Запись
        /// </summary>
        PresetSingleRegister = 0x06,
        /// <summary>
        /// Запись нескольких DO / Дискретное / Запись
        /// </summary>
        ForceMultipleCoils = 0x0F,
        /// <summary>
        /// Запись нескольких AO / 16 битное / Запись
        /// </summary>
        PresetMultipleRegisters = 0x10,
        /// <summary>
        /// Ошибка ответа на запрос
        /// </summary>
        ErrorResponse = 0x80,
    }
}
