using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Common
{
    public abstract class Variable<TType> : INotifyPropertyChanged, INotifyPropertyChanging 
        where TType : IComparable, IConvertible, IComparable<TType>, IEquatable<TType>
    {
        private TType value;
        private bool isInitialized;

        public bool IsInitialized => isInitialized;
        public string Name { get; set; }
        public virtual TType Value
        {
            get
            {
                return value;
            }
            set
            {
                if (!this.value.Equals(value))
                {
                    OnNotifyPropertyChanging();
                    this.value = value;
                    OnNotifyPropertyChanged();
                }
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;
        public event PropertyChangingEventHandler PropertyChanging;

        public Variable()
        {
        }

        protected void OnNotifyPropertyChanged([CallerMemberName] string propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
        protected void OnNotifyPropertyChanging([CallerMemberName] string propertyName = "")
        {
            PropertyChanging?.Invoke(this, new PropertyChangingEventArgs(propertyName));
        }
    }
}
