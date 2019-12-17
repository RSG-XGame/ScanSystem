using ScanSystem.Base.Interfaces;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystems.Protocols.Modbus
{
    public class ModbusResponse : IDeviceResponse
    {
        public ModbusMBAPHeader MBAPHeader { get; set; }
        public ModbusPDU PDU { get; set; }

        public bool Error { get; private set; }
        public string ErrorDescription { get; private set; }

        public ModbusResponse()
        {
            MBAPHeader = new ModbusMBAPHeader();
            PDU = new ModbusPDU();
            Error = false;
        }

        public void FromBytes(byte[] data, int length)
        {
            FromBytes(data, 0, length);
        }

        public void FromBytes(byte[] data, int startIndex, int length)
        {
            MBAPHeader.TransactionId = BitConverter.ToUInt16(data.GetRange(startIndex + 0, 2), 0);
            MBAPHeader.ProtocolId = BitConverter.ToUInt16(data.GetRange(startIndex + 2, 2), 0);
            MBAPHeader.Length = BitConverter.ToUInt16(data.GetRange(startIndex + 4, 2), 0);
            MBAPHeader.UnitId = data[startIndex + 6];
            PDU.FunctionCode = (ModbusFunctions)data[startIndex + 7];

            if (PDU.FunctionCode != ModbusFunctions.ErrorResponse)
            {
                switch (PDU.FunctionCode)
                {
                    case ModbusFunctions.ReadCoilStatus:
                    case ModbusFunctions.ReadInputStatus:
                    case ModbusFunctions.ReadHoldingRegisters:
                    case ModbusFunctions.ReadInputRegisters:
                        PDU.Data = new byte[data[8]];
                        Array.Copy(data, startIndex + 9, PDU.Data, 0, PDU.Data.Length);
                        break;

                    case ModbusFunctions.ForceSingleCoil:
                    case ModbusFunctions.PresetSingleRegister:
                    case ModbusFunctions.ForceMultipleCoils:
                    case ModbusFunctions.PresetMultipleRegisters:
                        PDU.Data = new byte[6];
                        Array.Copy(data, 8, PDU.Data, 0, length);
                        break;
                }
            }
            else
            {
                PDU.Data = new byte[1] { data[startIndex + 9] };
                switch (PDU.Data[0])
                {
                    case 1:
                        ErrorDescription = "Принятый код функции не может быть обработан.";
                        break;

                    case 2:
                        ErrorDescription = "Адрес данных, указанный в запросе, недоступен.";
                        break;

                    case 3:
                        ErrorDescription = "Значение, содержащееся в поле данных запроса, является недопустимой величиной.";
                        break;

                    case 4:
                        ErrorDescription = "Невосстанавливаемая ошибка имела место, пока ведомое устройство пыталось выполнить затребованное действие.";
                        break;

                    case 5:
                        ErrorDescription = "Ведомое устройство приняло запрос и обрабатывает его, но это требует много времени. Этот ответ предохраняет ведущее устройство от генерации ошибки тайм-аута.";
                        break;

                    case 6:
                        ErrorDescription = "Ведомое устройство занято обработкой команды. Ведущее устройство должно повторить сообщение позже, когда ведомое освободится.";
                        break;

                    case 7:
                        ErrorDescription = "Ведомое устройство не может выполнить программную функцию, заданную в запросе. Этот код возвращается для неуспешного программного запроса, использующего функции с номерами 13 или 14. Ведущее устройство должно запросить диагностическую информацию или информацию об ошибках от ведомого.";
                        break;

                    case 8:
                        ErrorDescription = "Ведомое устройство при чтении расширенной памяти обнаружило ошибку паритета. Ведущее устройство может повторить запрос, но обычно в таких случаях требуется ремонт.";
                        break;

                    case 10:
                        ErrorDescription = "Шлюз неправильно настроен или перегружен запросами.";
                        break;

                    case 11:
                        ErrorDescription = "Slave устройства нет в сети или от него нет ответа.";
                        break;

                    default:
                        ErrorDescription = "Неизвестная ошибка!";
                        break;
                }
                Error = true;
            }
        }

        public static ModbusResponse[] ReadResponses(byte[] data, int length, out int lastIndex)
        {
            List<ModbusResponse> responses = new List<ModbusResponse>();

            lastIndex = 0;
            while (lastIndex < length)
            {
                ModbusResponse response = new ModbusResponse();
                try
                {
                    response.FromBytes(data, lastIndex, length);
                }
                catch
                {
                    break;
                }
                lastIndex += response.MBAPHeader.Length + 6;

                responses.Add(response);
            }

            return responses.ToArray();
        }
    }
}
