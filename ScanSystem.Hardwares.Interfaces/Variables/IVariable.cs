using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Variables
{
    public interface IVariable : INotifyPropertyChanging, INotifyPropertyChanged, IDisposable
    {
        string Name { get; }
        IAddress Address { get; }
        bool Disposed { get; }

        object GetValue();
        void SetValue(object value);
        Type GetValueType();
    }

    public interface IVariable<TType> : IVariable
        where TType : IComparable, IComparable<TType>, IConvertible, IEquatable<TType>
    {
        TType Value { get; set; }
    }
}
