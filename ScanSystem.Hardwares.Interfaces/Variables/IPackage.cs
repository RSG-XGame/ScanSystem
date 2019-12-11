using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Variables
{
    public interface IPackage : IDisposable
    {
        bool Disposed { get; }
    }
}
