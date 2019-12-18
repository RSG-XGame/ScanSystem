using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.CommonDevice
{
    public interface IServerDevices : IDisposable
    {
        bool Running { get; }

        void Start();
        void Stop();

        void RegisterDevice(IDevice device);
        void RemoveDevice(IDevice device);
        void Clear();
    }
}
