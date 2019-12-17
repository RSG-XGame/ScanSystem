using ScanSystem.Hardwares.Implementations.Abstracts;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.DataLogic
{
    public class DataLogicSettings : DeviceSettings
    {
        public string BeginSplitter { get; set; }
        public string EndSplitter { get; set; }

        public override bool Equals(IDeviceSettings other)
        {
            return base.Equals(other) && Equals(other as DataLogicSettings);
        }

        public override bool Equals(object obj)
        {
            return obj is DataLogicSettings settings &&
                   BeginSplitter == settings.BeginSplitter &&
                   EndSplitter == settings.EndSplitter;
        }

        public override int GetHashCode()
        {
            var hashCode = 558327548;
            hashCode = hashCode * -1521134295 + base.GetHashCode();
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(BeginSplitter);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(EndSplitter);
            return hashCode;
        }
    }
}
