using ScanSystem.Hardwares.Interfaces.Variables;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystems.Protocols.Modbus.Common
{
    public class ModbusVariableParams : IVariableParams
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public ModbusDataTypes DataType { get; set; }
        public int Size { get; set; }
        public bool IsUnicode { get; set; }
    }
}
