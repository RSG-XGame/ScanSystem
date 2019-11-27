using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.DataLogic
{
    public class DataLogicEventArgs : IDeviceEventArgs
    {
        public string[] Data { get; internal set; }
    }
}
