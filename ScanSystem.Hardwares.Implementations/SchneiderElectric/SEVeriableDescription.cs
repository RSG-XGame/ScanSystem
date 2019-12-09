using ScanSystem.Hardwares.Interfaces.CommonDevice;
using ScanSystem.Hardwares.Interfaces.Variables;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.SchneiderElectric
{
    public class SEVeriableDescription : IVariableDescription
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public int DataType { get; set; }
    }
}
