using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Threading;
using System.Timers;
using ScanSystem.Hardwares.Implementations.SchneiderElectric;
using ScanSystem.Hardwares.Interfaces.Variables;
using ScanSystems.Protocols.Modbus;
using ScanSystems.Protocols.Modbus.Common;

namespace TestAppConsole
{
    public enum TimerTypes
    {
        EveryDayTimer
    }

    public interface IEventTimer
    {
        Guid TimerId { get; }
        TimerTypes TimerType { get; }
        event Action<CancellationToken> ExecuteMethods;

        void Start();
        void Stop();
    }

    public abstract class EventTimer : IEventTimer
    {
        protected System.Timers.Timer timer;
        protected TimerTypes timerType;
        private Guid timerId;
        protected CancellationTokenSource cancelToken;

        public Guid TimerId => timerId;
        public TimerTypes TimerType => timerType;

        public event Action<CancellationToken> ExecuteMethods;

        public EventTimer()
        {
            timer = new System.Timers.Timer();
            timer.AutoReset = true;
            timer.Elapsed += Timer_Elapsed;
            timerId = Guid.NewGuid();
        }

        private void Timer_Elapsed(object sender, ElapsedEventArgs e)
        {
            ExecuteMethods?.Invoke(cancelToken.Token);
        }

        public abstract void Start();
        public void Stop()
        {
            cancelToken.Cancel();
            timer.Stop();
        }
    }

    public sealed class EveryDayTimer : EventTimer
    {
        private DateTime execTime;

        public TimeSpan ExecTime { get; set; }

        public EveryDayTimer()
            : base()
        {
            timerType = TimerTypes.EveryDayTimer;
            timer.Elapsed += Timer_Elapsed;
        }

        private void Timer_Elapsed(object sender, ElapsedEventArgs e)
        {
        }

        public override void Start()
        {

            timer.Start();
        }
    }

    public sealed class PeriodicalTimer : EventTimer
    {
        public PeriodicalTimer()
              : base()
        {
            timerType = TimerTypes.EveryDayTimer;
            timer.Elapsed += Timer_Elapsed;
        }

        private void Timer_Elapsed(object sender, ElapsedEventArgs e)
        {
        }

        public override void Start()
        {
        }
    }

    class Program
    {
        private static List<SEDevice> devices = new List<SEDevice>();

        private static void deviceModbus(int port)
        {
            SEDeviceSettings settings = new SEDeviceSettings
            {
                IPAddress = "127.0.0.1",
                Port = port,
                PollingTimeout = 100,
                UnitId = 1,
                SendTimeout = 1000,
                ReciveTimeout = 0,
                SendBufferSize = 4096,
                ReciveBufferSize = 4096
            };
            settings.Variables.AddRange(new ModbusVariableParams[]
            {
                new ModbusVariableParams { Name = "V0000", Size = 2, DataType = ModbusDataTypes.SHORT, IsUnicode = false, Address = "%MW0" },
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

           // device.DeviceRecivedMessage += Device_DeviceRecivedMessage;

            devices.Add(device);
        }

        static ManualResetEvent lockConsole = new ManualResetEvent(true);
        private static void Device_DeviceRecivedMessage(ScanSystem.Hardwares.Interfaces.CommonDevice.IDevice device, ScanSystem.Hardwares.Interfaces.CommonDevice.IDeviceEventArgs args)
        {
            
        }

        static void Main(string[] args)
        {

            System.Timers.Timer t = new System.Timers.Timer();
            //t.Enabled = true;
            t.Interval = 50;
            t.AutoReset = true;
            t.Elapsed += T_Elapsed;
            deviceModbus(502);
            //deviceModbus(503);

            foreach (var device in devices)
            {
                device.Open();
            }
            //t.Start();

            Console.ReadKey(true);

            //t.Stop();
            foreach (var device in devices)
            {
                device.Close();
                device.Dispose();
            }

            devices.Clear();
            //ModbusVariable<bool> v1 = new ModbusVariable<bool>(); v1.Initialize(nameof(v1), "%MX0.0");
            //ModbusVariable<bool> v2 = new ModbusVariable<bool>(); v2.Initialize(nameof(v2), "%MX0.3");
            //ModbusVariable<bool> v3 = new ModbusVariable<bool>(); v3.Initialize(nameof(v3), "%MX0.4");
            //ModbusVariable<bool> v4 = new ModbusVariable<bool>(); v4.Initialize(nameof(v4), "%MX1.6");
            //ModbusVariable<bool> v5 = new ModbusVariable<bool>(); v5.Initialize(nameof(v5), "%MX1.7");
            //ModbusVariable<bool> v6 = new ModbusVariable<bool>(); v6.Initialize(nameof(v6), "%MX3.0");
            //ModbusVariable<bool> v7 = new ModbusVariable<bool>(); v7.Initialize(nameof(v7), "%MX6.1");
            //ModbusVariable<bool> v10 = new ModbusVariable<bool>(); v10.Initialize(nameof(v10), "%MX6.2");
            //ModbusVariable<bool> v14 = new ModbusVariable<bool>(); v14.Initialize(nameof(v14), "%MX6.3");
            //ModbusVariable<bool> v15 = new ModbusVariable<bool>(); v15.Initialize(nameof(v15), "%MX6.4");
            //ModbusVariable<int> v17 = new ModbusVariable<int>(); v17.Initialize(nameof(v17), "%MW4");

            //List<IVariable> variables = new List<IVariable>();
            //variables.Add(v1);
            //variables.Add(v2);
            //variables.Add(v3);
            //variables.Add(v4);
            //variables.Add(v5);
            //variables.Add(v6);
            //variables.Add(v7);
            //variables.Add(v10);
            //variables.Add(v14);
            //variables.Add(v15);
            //variables.Add(v17);
            //ModbusHelper helper = new ModbusHelper();
            //var pakcs = helper.PackagingVariables(variables.ToArray());

            //EveryDayTimer t = new EveryDayTimer();
            //t.ExecTime = new TimeSpan(23, 42, 00);
            //t.ExecuteMethods += T_ExecuteMethods;
            //t.Start();
            //Console.ReadKey(true);

            //ModbusVariable<short> iG_State = new ModbusVariable<short>(); iG_State.Initialize(nameof(iG_State), "%MW0");
            //ModbusVariable<short> iG_Operation = new ModbusVariable<short>(); iG_Operation.Initialize(nameof(iG_Operation), "%MW1");
            //ModbusHelper helper = new ModbusHelper();
            //helper.UnitId = 1;
            //var packs = helper.PackagingVariables(new IVariable[] { iG_State, iG_Operation });

            //TcpClient client = new TcpClient();
            //try
            //{
            //    client.ReceiveTimeout = 2000;
            //    client.SendTimeout = 2000;

            //    client.Connect("127.0.0.1", 502);
            //    var stream = client.GetStream();
            //    var req = helper.SendReadHoldingRegisters(packs[0]);
            //    byte[] data = req.GetBytes();
            //    stream.Write(data, 0, data.Length);
            //    byte[] buffer = new byte[300];
            //    while (!stream.DataAvailable)
            //    {
            //        stream.Write(data, 0, data.Length);
            //    }
            //    int len = stream.Read(buffer, 0, buffer.Length);

            //}
            //catch
            //{
            //}
            //finally
            //{
            //    client.Close();
            //    client.Dispose();
            //    client = null;
            //}
        }

        private static void T_Elapsed(object sender, ElapsedEventArgs e)
        {
            if (lockConsole.WaitOne(0))
            {
                lockConsole.Reset();
                Console.Clear();
                foreach (var device in devices)
                {
                    if (device is SEDevice)
                    {
                        SEDevice d = device as SEDevice;
                        foreach (var variable in d)
                        {
                            Console.WriteLine($"{variable.Name} = {variable.Value}");
                        }
                    }
                    Console.WriteLine();
                    Console.WriteLine();
                }
                lockConsole.Set();
            }
        }

        private static void T_ExecuteMethods(CancellationToken obj)
        {
            Console.WriteLine(DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss.ms"));
        }
    }
}
