using ScanSystem.Base.Interfaces;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystems.Protocols.Modbus
{
    public class ModbusRequest : IDeviceRequest
    {
        public bool IsInternal { get; internal set; }
        public ModbusMBAPHeader MBAPHeader { get; set; }
        public ModbusPDU PDU { get; set; }

        public int PackageId { get; set; }

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
                case ModbusFunctions.PresetSingleRegister:
                case ModbusFunctions.ForceMultipleCoils:
                case ModbusFunctions.PresetMultipleRegisters:
                    result.AddRange(PDU.Data);
                    break;
            }

            return result.ToArray();
        }
    }
}
