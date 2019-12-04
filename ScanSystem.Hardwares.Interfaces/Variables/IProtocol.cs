using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Variables
{
    public interface IProtocol : ICollection<IVariable>, IDisposable
    {
        bool Disposed { get; }
        
        TType Read<TType>(IVariable<TType, IAddress> variable) where TType : IComparable, IComparable<TType>, IConvertible, IEquatable<TType>;
        bool Write<TType>(IVariable<TType, IAddress> variable) where TType : IComparable, IComparable<TType>, IConvertible, IEquatable<TType>;
    }
}
