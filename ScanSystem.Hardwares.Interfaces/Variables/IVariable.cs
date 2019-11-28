using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Variables
{
    public interface IVariable<TType>
    {
        string Name { get; set; }
        IAddress Address { get; set; }
        TType Value { get; set; }
    }
}
