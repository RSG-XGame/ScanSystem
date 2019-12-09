using System;
using System.Net.Sockets;
using System.Threading;
using System.Timers;
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
        static void Main(string[] args)
        {
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

            EveryDayTimer t = new EveryDayTimer();
            t.ExecTime = new TimeSpan(23, 42, 00);
            t.ExecuteMethods += T_ExecuteMethods;
            t.Start();
            Console.ReadKey(true);

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

        private static void T_ExecuteMethods(CancellationToken obj)
        {
            Console.WriteLine(DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss.ms"));
        }
    }
}
