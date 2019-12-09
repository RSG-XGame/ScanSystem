using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces
{
    public interface IDisposingNotify
    {
        event DisposingHandler Disposing;
    }
}
