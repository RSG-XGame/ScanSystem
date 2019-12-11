using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.Abstracts
{
    public abstract class DeviceSettings : IDeviceSettings
    {
        public string IPAddress { get; set; }
        public int Port { get; set; }
        public int SendTimeout { get; set; }
        public int ReciveTimeout { get; set; }
        public int SendBufferSize { get; set; }
        public int ReciveBufferSize { get; set; }

        public bool Equals(DeviceSettings other)
        {
            return other != null &&
                   IPAddress == other.IPAddress &&
                   Port == other.Port &&
                   SendTimeout == other.SendTimeout &&
                   ReciveTimeout == other.ReciveTimeout &&
                   SendBufferSize == other.SendBufferSize &&
                   ReciveBufferSize == other.ReciveBufferSize;
        }

        public virtual bool Equals(IDeviceSettings other)
        {
            return Equals(other as DeviceSettings);
        }

        public override int GetHashCode()
        {
            var hashCode = -1751588062;
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(IPAddress);
            hashCode = hashCode * -1521134295 + Port.GetHashCode();
            hashCode = hashCode * -1521134295 + SendTimeout.GetHashCode();
            hashCode = hashCode * -1521134295 + ReciveTimeout.GetHashCode();
            hashCode = hashCode * -1521134295 + SendBufferSize.GetHashCode();
            hashCode = hashCode * -1521134295 + ReciveBufferSize.GetHashCode();
            return hashCode;
        }
    }
}
