using ScanSystem.Hardwares.Implementations.Abstracts;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using ScanSystems.Protocols.Modbus.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.SchneiderElectric
{
    public class SEDeviceSettings : DeviceSettings
    {
        public int PollingTimeout { get; set; }
        public byte UnitId { get; set; }

        public List<ModbusVariableParams> Variables { get; set; } = new List<ModbusVariableParams>();

        public override bool Equals(IDeviceSettings other)
        {
            return base.Equals(other) && Equals(other as SEDeviceSettings);
        }

        public override bool Equals(object obj)
        {
            return obj is SEDeviceSettings settings &&
                   PollingTimeout == settings.PollingTimeout &&
                   UnitId == settings.UnitId &&
                   EqualityComparer<List<ModbusVariableParams>>.Default.Equals(Variables, settings.Variables);
        }

        public override int GetHashCode()
        {
            var hashCode = 1183322437;
            hashCode = hashCode * -1521134295 + base.GetHashCode();
            hashCode = hashCode * -1521134295 + PollingTimeout.GetHashCode();
            hashCode = hashCode * -1521134295 + UnitId.GetHashCode();
            hashCode = hashCode * -1521134295 + EqualityComparer<List<ModbusVariableParams>>.Default.GetHashCode(Variables);
            return hashCode;
        }
    }
}
