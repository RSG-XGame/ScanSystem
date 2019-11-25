using ScanSystem.Hardwares.Implementations.PLC.Modbus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAppConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            ModbusVariable<bool> variable = new ModbusVariable<bool>() { Name = "xG_Test1", RegisterNum = 0, BitNum = 0 };
        }
    }
}
