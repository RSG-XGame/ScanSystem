using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Common
{
    public interface IDeviceError
    {
        DateTime ExceptionCreateDate { get; }
        Exception FullException { get; }
        string Message { get; }

        bool Disconnect { get; set; }
    }
}
