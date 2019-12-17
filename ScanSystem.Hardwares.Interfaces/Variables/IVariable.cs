using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Variables
{
    public interface IVariableInternal
    {
        void SetValue(object value);
        object GetValue();

        event VariableValueChangedHandler VariableValueChanged;
    }
    public interface IVariableInternal<TType> : IVariableInternal
        where TType : IComparable, IComparable<TType>, IConvertible, IEquatable<TType>
    {
        void SetValue(TType value);
        new TType GetValue();

    }

    public interface IVariable : INotifyPropertyChanging, INotifyPropertyChanged, IDisposable, IDisposingNotify
    {
        string Name { get; }
        IAddress Address { get; }
        bool Disposed { get; }
        object Value { get; set; }
        int Size { get; }
        
        void Initialize(IVariableParams variableParams);
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
