using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OnionApp.Infrastructure.Data;
using ScanSystem.Hardwares.Interfaces.Variables;
using ScanSystems.Protocols.Modbus;
using ScanSystems.Protocols.Modbus.Common;

namespace TestAppConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            ModbusVariable<bool> v1 = new ModbusVariable<bool>(); v1.Initialize(nameof(v1), "%MX0.0");
            ModbusVariable<bool> v2 = new ModbusVariable<bool>(); v2.Initialize(nameof(v2), "%MX0.3");
            ModbusVariable<bool> v3 = new ModbusVariable<bool>(); v3.Initialize(nameof(v3), "%MX0.4");
            ModbusVariable<bool> v4 = new ModbusVariable<bool>(); v4.Initialize(nameof(v4), "%MX1.6");
            ModbusVariable<bool> v5 = new ModbusVariable<bool>(); v5.Initialize(nameof(v5), "%MX1.7");
            ModbusVariable<bool> v6 = new ModbusVariable<bool>(); v6.Initialize(nameof(v6), "%MX3.0");
            ModbusVariable<bool> v7 = new ModbusVariable<bool>(); v7.Initialize(nameof(v7), "%MX6.1");
            ModbusVariable<bool> v10 = new ModbusVariable<bool>(); v10.Initialize(nameof(v10), "%MX6.2");
            ModbusVariable<bool> v14 = new ModbusVariable<bool>(); v14.Initialize(nameof(v14), "%MX6.3");
            ModbusVariable<bool> v15 = new ModbusVariable<bool>(); v15.Initialize(nameof(v15), "%MX6.4");
            ModbusVariable<int> v17 = new ModbusVariable<int>(); v17.Initialize(nameof(v17), "%MW4");

            List<IVariable> variables = new List<IVariable>();
            variables.Add(v1);
            variables.Add(v2);
            variables.Add(v3);
            variables.Add(v4);
            variables.Add(v5);
            variables.Add(v6);
            variables.Add(v7);
            variables.Add(v10);
            variables.Add(v14);
            variables.Add(v15);
            variables.Add(v17);
            ModbusHelper helper = new ModbusHelper();
            var pakcs = helper.PackagingVariables(variables.ToArray());
        }
    }
}
