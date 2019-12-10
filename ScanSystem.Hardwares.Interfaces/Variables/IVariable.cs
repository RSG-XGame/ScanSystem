using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Variables
{
    public interface IVariable : INotifyPropertyChanging, INotifyPropertyChanged, IDisposable, IDisposingNotify
    {
        string Name { get; }
        IAddress Address { get; }
        bool Disposed { get; }
        object Value { get; set; }
        int Size { get; }

        void Initialize(string name, string address, int size = 0);
        Type GetValueType();
    }

    public interface IVariable<TType, TAddress> : IVariable
        where TType : IComparable, IComparable<TType>, IConvertible, IEquatable<TType>
        where TAddress : IAddress
    {
        new TType Value { get; set; }
        new TAddress Address { get; }
    }
}
