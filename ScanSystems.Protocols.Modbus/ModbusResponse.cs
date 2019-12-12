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

        public ModbusResponse()
        {
            MBAPHeader = new ModbusMBAPHeader();
            PDU = new ModbusPDU();
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
                    PDU.Data = new byte[length - 8];
                    Array.Copy(data, 8, PDU.Data, 0, length);
                    break;
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
