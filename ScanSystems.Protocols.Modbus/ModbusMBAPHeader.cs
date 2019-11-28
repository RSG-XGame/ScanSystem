using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystems.Protocols.Modbus
{
    public class ModbusMBAPHeader
    {
        public ushort TransactionId { get; set; }
        public ushort ProtocolId { get; set; } = 0;
        public ushort Length { get; set; }
        public byte UnitId { get; set; }
    }
}
