using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Variables
{
    public interface IVariableParams
    {
        string Name { get; set; }
        string Address { get; set; }
    }
}
