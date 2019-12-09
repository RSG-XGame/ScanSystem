using ScanSystem.Base.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystems.Protocols.Modbus
{
    public class ModbusResponse : IResponse
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
            MBAPHeader.TransactionId = BitConverter.ToUInt16(data.GetRange(0, 2), 0);
            MBAPHeader.ProtocolId = BitConverter.ToUInt16(data.GetRange(2, 2), 0);
            MBAPHeader.Length = BitConverter.ToUInt16(data.GetRange(4, 2), 0);
            MBAPHeader.UnitId = data[6];
            PDU.FunctionCode = (ModbusFunctions)data[7];

            switch (PDU.FunctionCode)
            {
                case ModbusFunctions.ReadCoilStatus:
                case ModbusFunctions.ReadInputStatus:
                case ModbusFunctions.ReadHoldingRegisters:
                case ModbusFunctions.ReadInputRegisters:
                    length = data[8];
                    PDU.Data = new byte[length];
                    Array.Copy(data, 9, PDU.Data, 0, length);
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
    }
}
