using ScanSystem.Hardwares.Interfaces.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations
{
    public class CommonDeviceError : IDeviceError
    {
        public DateTime ExceptionCreateDate { get; internal set; }

        public Exception FullException { get; internal set; }

        public string Message { get; internal set; }
    }
}
