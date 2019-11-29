using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Variables
{
    public interface IVariable<TType>
        where TType : IComparable, IComparable<TType>, IConvertible, IEquatable<TType>
    {
        string Name { get; set; }
        IAddress Address { get; }
        TType Value { get; set; }
    }
}
