using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.SchneiderElectric
{
    public class SEInitParams : IDeviceInitializationParams
    {
        private Guid deviceId;
        private IDeviceSettings settings;

        public Guid DeviceId { get => deviceId; set => deviceId = value; }

        public IDeviceSettings Settings { get => settings; set => settings = value; }
    }
}
