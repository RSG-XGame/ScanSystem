using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.CommonDevice
{
    public interface IVariableDescription
    {
        string Name { get; set; }
        string Address { get; set; }
        int DataType { get; set; }
    }
}
