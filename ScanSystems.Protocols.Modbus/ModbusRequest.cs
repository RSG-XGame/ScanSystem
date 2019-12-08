using ScanSystem.Base.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystems.Protocols.Modbus
{
    public class ModbusRequest : IRequest
    {
        public ModbusMBAPHeader MBAPHeader { get; set; }
        public ModbusPDU PDU { get; set; }

        public ModbusRequest()
        {
            MBAPHeader = new ModbusMBAPHeader();
            PDU = new ModbusPDU();
        }

        public byte[] GetBytes()
        {
            List<byte> result = new List<byte>();

            result.AddRange(BitConverter.GetBytes(MBAPHeader.TransactionId).Reverse());
            result.AddRange(BitConverter.GetBytes(MBAPHeader.ProtocolId).Reverse());
            result.AddRange(BitConverter.GetBytes(MBAPHeader.Length).Reverse());
            result.Add(MBAPHeader.UnitId);
            result.Add((byte)PDU.FunctionCode);

            switch (PDU.FunctionCode)
            {
                case ModbusFunctions.ReadCoilStatus:
                case ModbusFunctions.ReadInputStatus:
                case ModbusFunctions.ReadHoldingRegisters:
                case ModbusFunctions.ReadInputRegisters:
                    result.AddRange(PDU.Data);
                    break;

                case ModbusFunctions.ForceSingleCoil:

                    break;

                case ModbusFunctions.PresetSingleRegister:

                    break;

                case ModbusFunctions.ForceMultipleCoils:

                    break;

                case ModbusFunctions.PresetMultipleRegisters:

                    break;
            }

            return result.ToArray();
        }
    }
}
