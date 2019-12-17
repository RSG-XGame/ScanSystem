using ScanSystem.Hardwares.Implementations.SchneiderElectric;
using ScanSystems.Protocols.Modbus;
using ScanSystems.Protocols.Modbus.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestWin.SETest
{
    public class TestSEDevice
    {

        public static SEDevice CreateSEDevice(int port)
        {
            SEDeviceSettings settings = new SEDeviceSettings
            {
                IPAddress = "127.0.0.1",
                Port = port,
                PollingTimeout = 250,
                UnitId = 1,
                SendTimeout = 0,
                ReciveTimeout = 0,
                SendBufferSize = 2048,
                ReciveBufferSize = 2048
            };
            settings.Variables.AddRange(new ModbusVariableParams[]
            {
                new ModbusVariableParams { Name = "V0000.0", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX0.0" },
                new ModbusVariableParams { Name = "V0000.1", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX0.1" },
                new ModbusVariableParams { Name = "V0000.2", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX0.2" },
                new ModbusVariableParams { Name = "V0000.3", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX0.3" },
                new ModbusVariableParams { Name = "V0000.4", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX0.4" },
                new ModbusVariableParams { Name = "V0000.5", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX0.5" },
                new ModbusVariableParams { Name = "V0000.6", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX0.6" },
                new ModbusVariableParams { Name = "V0000.7", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX0.7" },
                new ModbusVariableParams { Name = "V0000.8", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX1.0" },
                new ModbusVariableParams { Name = "V0000.9", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX1.1" },
                new ModbusVariableParams { Name = "V0000.10", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX1.2" },
                new ModbusVariableParams { Name = "V0000.11", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX1.3" },
                new ModbusVariableParams { Name = "V0000.12", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX1.4" },
                new ModbusVariableParams { Name = "V0000.13", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX1.5" },
                new ModbusVariableParams { Name = "V0000.14", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX1.6" },
                new ModbusVariableParams { Name = "V0000.15", Size = 1, DataType = ModbusDataTypes.BOOL, IsUnicode = false, Address = "%MX1.7" },
                new ModbusVariableParams { Name = "V0001", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW1" },
                new ModbusVariableParams { Name = "V0002", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address =  "%MW2" },
                new ModbusVariableParams { Name = "V0003", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address =  "%MW3" },
                new ModbusVariableParams { Name = "V0004", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address =  "%MW4" },
                new ModbusVariableParams { Name = "V0005", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address =  "%MW5" },
                new ModbusVariableParams { Name = "V0006", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address =  "%MW6" },
                new ModbusVariableParams { Name = "V0007", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address =  "%MW7" },
                new ModbusVariableParams { Name = "V0008", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address =  "%MW8" },
                new ModbusVariableParams { Name = "V0009", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address =  "%MW9" },
                new ModbusVariableParams { Name = "V0010", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address =  "%MW10" },
                new ModbusVariableParams { Name = "V0011", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW11" },
                new ModbusVariableParams { Name = "V0012", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW12" },
                new ModbusVariableParams { Name = "V0013", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW13" },
                new ModbusVariableParams { Name = "V0014", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW14" },
                new ModbusVariableParams { Name = "V0015", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW15" },
                new ModbusVariableParams { Name = "V0016", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW16" },
                new ModbusVariableParams { Name = "V0017", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW17" },
                new ModbusVariableParams { Name = "V0018", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW18" },
                new ModbusVariableParams { Name = "V0019", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW19" },
                new ModbusVariableParams { Name = "V0020", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW20" },
                new ModbusVariableParams { Name = "V0021", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW21" },
                new ModbusVariableParams { Name = "V0022", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW22" },
                new ModbusVariableParams { Name = "V0023", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW23" },
                new ModbusVariableParams { Name = "V0024", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW24" },
                new ModbusVariableParams { Name = "V0025", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW25" },
                new ModbusVariableParams { Name = "V0026", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW26" },
                new ModbusVariableParams { Name = "V0027", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW27" },
                new ModbusVariableParams { Name = "V0028", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW28" },
                new ModbusVariableParams { Name = "V0029", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW29" },
                new ModbusVariableParams { Name = "V0030", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW30" },
                new ModbusVariableParams { Name = "V0031", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW31" },
                new ModbusVariableParams { Name = "V0032", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW32" },
                new ModbusVariableParams { Name = "V0033", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW33" },
                new ModbusVariableParams { Name = "V0034", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW34" },
                new ModbusVariableParams { Name = "V0035", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW35" },
                new ModbusVariableParams { Name = "V0036", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW36" },
                new ModbusVariableParams { Name = "V0037", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW37" },
                new ModbusVariableParams { Name = "V0038", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW38" },
                new ModbusVariableParams { Name = "V0039", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW39" },
                new ModbusVariableParams { Name = "V0040", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW40" },
                new ModbusVariableParams { Name = "V0041", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW41" },
                new ModbusVariableParams { Name = "V0042", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW42" },
                new ModbusVariableParams { Name = "V0043", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW43" },
                new ModbusVariableParams { Name = "V0044", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW44" },
                new ModbusVariableParams { Name = "V0045", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW45" },
                new ModbusVariableParams { Name = "V0046", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW46" },
                new ModbusVariableParams { Name = "V0047", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW47" },
                new ModbusVariableParams { Name = "V0048", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW48" },
                new ModbusVariableParams { Name = "V0049", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW49" }
            });


            SEInitParams initParams = new SEInitParams
            {
                DeviceId = Guid.NewGuid(),
                Settings = settings
            };

            SEDevice device = new SEDevice();
            device.Initialization(initParams);

            return device;
            //device.Open();

            //Console.ReadKey(true);

            //device.Close();
            //device.Dispose();
            //device = null;
        }
    }
}
