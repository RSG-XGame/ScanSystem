using System;
using System.Collections.Generic;

namespace DataLogic.Emulator
{
    class Program
    {
        private static readonly string keyMode = "--mode";
        private static readonly string keyIP = "--ip";
        private static readonly string keyPort = "--port";
        private static readonly string keyTimeout = "--timeout";

        static void Main(string[] args)
        {
            if (CheckArgs(args))
            {
                Dictionary<string, string> settings = new Dictionary<string, string>(ReadSettings(args));

                try
                {
                    if (settings[keyMode] == "client")
                    {
                        DataLogicClient client = new DataLogicClient()
                        {
                            IPAddress = settings.ContainsKey(keyIP) ? settings[keyIP] : "127.0.0.1",
                            Port = settings.ContainsKey(keyPort) ? Convert.ToInt32(settings[keyPort]) : 4352,
                            TimeoutCycle = settings.ContainsKey(keyTimeout) ? Convert.ToInt32(settings[keyTimeout]) : 1000
                        };
                        client.Start();
                        Console.ReadKey(true);
                        client.Dispose();
                        client = null;
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"#ERROR {DateTime.Now}: {ex}");
                }
            }
        }

        private static bool CheckArgs(string[] args)
        {
            bool result = false;
            if (args.Length % 2 == 0)
            {
                result = true;
            }

            if (!result)
            {
                Console.WriteLine($"#ERROR {DateTime.Now}: некорректное количество параметров.");
            }
            return result;
        }
        private static IEnumerable<KeyValuePair<string, string>> ReadSettings(string[] args)
        {
            List<string> cmds = new List<string>(new string[] { keyMode, keyIP, keyPort, keyTimeout });
            string key = string.Empty;
            foreach (var arg in args)
            {
                if (string.IsNullOrEmpty(key))
                {
                    key = arg;
                    if (!cmds.Contains(key))
                    {
                        Console.WriteLine($"#ERROR {DateTime.Now}: неизвестная команда.");
                    }
                }
                else
                {
                    yield return new KeyValuePair<string, string>(key, arg);
                }
            }
        }
    }
}
