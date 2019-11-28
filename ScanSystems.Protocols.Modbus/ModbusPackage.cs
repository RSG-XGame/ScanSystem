using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystems.Protocols.Modbus
{
    public class ModbusPackage
    {
        public ModbusMBAPHeader MBAPHeader { get; set; }
        public ModbusPDU PDU { get; set; }
    }
}
