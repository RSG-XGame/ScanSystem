using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Interfaces.Variables
{
    public interface IAddress : IComparable
    {
        bool Union(IAddress address);
    }
}
