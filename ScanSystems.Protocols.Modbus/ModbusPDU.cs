using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystems.Protocols.Modbus
{
    public class ModbusPDU
    {
        public ModbusFunctions FunctionCode { get; set; }
        public byte[] Data { get; set; }
    }
}
