using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.DataLogic
{
    public class DataLogicSettings : IDeviceSettings
    {
        public string IPAddress { get; set; }
        public int Port { get; set; }

        public string BeginSplitter { get; set; }
        public string EndSplitter { get; set; }

        public override bool Equals(object obj)
        {
            var settings = obj as DataLogicSettings;
            return settings != null &&
                   IPAddress == settings.IPAddress &&
                   Port == settings.Port &&
                   BeginSplitter == settings.BeginSplitter &&
                   EndSplitter == settings.EndSplitter;
        }

        public override int GetHashCode()
        {
            var hashCode = 788548264;
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(IPAddress);
            hashCode = hashCode * -1521134295 + Port.GetHashCode();
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(BeginSplitter);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(EndSplitter);
            return hashCode;
        }
    }
}
