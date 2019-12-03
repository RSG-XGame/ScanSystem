using ScanSystem.Hardwares.Interfaces.Variables;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace ScanSystems.Protocols.Modbus
{
    public class ModbusAddress : IAddress
    {
        private int wordNum;
        private string address;
        private int bitNum;
        private int countBits;

        public string MemoryArea { get; private set; } = "M";
        public string MemorySize { get; private set; } = "W";
        public string MemoryAddress { get; private set; } = "0";

        public int CountBits => countBits;
        public int BitNum
        {
            get { return bitNum; }
        }
        public int WordNum
        {
            get { return wordNum; }
        }
        public string Address
        {
            get { return address; }
            set { Update(value); }
        }

        public bool CheckSupportOperation(ModbusFunctions functionCode)
        {
            bool result = false;

            return result;
        }
        public int CompareTo(object obj)
        {
            if (obj.GetType() != typeof(ModbusAddress))
                throw new InvalidCastException($"Невозможно преобразовать {obj.GetType()} к типу {typeof(ModbusAddress)}.");
            ModbusAddress addr = obj != null ? obj as ModbusAddress : this;
            int result = wordNum.CompareTo(addr.wordNum);
            if (result == 0)
                result = bitNum.CompareTo(addr.bitNum);
            return result;
        }
        private void Update(string value)
        {
            if (!address.Equals(value))
            {
                Regex regex = new Regex(@"%(?<MemoryArea>[IQMiqm])(?<MemorySize>[XBWDLxbwdl])(?<MemoryAddress>\d+\.\d+|\d+)", RegexOptions.IgnorePatternWhitespace);

                Match match = regex.Match(value);
                if (match.Success)
                {
                    MemoryArea = match.Groups["MemoryArea"].Value.ToUpper();
                    MemorySize = match.Groups["MemorySize"].Value.ToUpper();
                    MemoryAddress = match.Groups["MemoryAddress"].Value.ToUpper();

                    string[] addr = MemoryAddress.Split(new string[] { ".", "," }, StringSplitOptions.RemoveEmptyEntries);
                    int addr1;
                    int addr2;

                    switch (MemorySize)
                    {
                        case "X":
                            countBits = 1;
                            if (addr.Length == 2 && 
                                int.TryParse(addr[0], out addr1) &&
                                int.TryParse(addr[1], out addr2))
                            {
                                wordNum = Convert.ToInt32(Math.Floor(addr1 * 8 / 2D));
                                bitNum = addr2 + ((addr1 % 2) * 8);
                            }
                            else
                            {
                                throw new ArgumentException("Некорректное значение свойства!");
                            }
                            break;

                        case "B":
                            countBits = 8;
                            if (addr.Length == 1 &&
                                int.TryParse(addr[0], out addr1))
                            {
                                wordNum = Convert.ToInt32(Math.Floor(addr1 / 2D));
                                bitNum = addr1 % 2 == 1 ? 7 : 0;
                            }
                            else
                            {
                                throw new ArgumentException("Некорректное значение свойства!");
                            }
                            break;

                        case "W":
                            countBits = 16;
                            if (addr.Length == 1 &&
                                int.TryParse(addr[0], out addr1))
                            {
                                wordNum = Convert.ToInt32(addr1);
                            }
                            else
                            {
                                throw new ArgumentException("Некорректное значение свойства!");
                            }
                            break;

                        case "D":
                            countBits = 32;
                            if (addr.Length == 1 &&
                                int.TryParse(addr[0], out addr1))
                            {
                                wordNum = Convert.ToInt32(addr1 * 2);
                            }
                            else
                            {
                                throw new ArgumentException("Некорректное значение свойства!");
                            }
                            break;

                        case "L":
                            countBits = 64;
                            if (addr.Length == 1 &&
                                int.TryParse(addr[0], out addr1))
                            {
                                wordNum = Convert.ToInt32(addr1 * 4);
                            }
                            else
                            {
                                throw new ArgumentException("Некорректное значение свойства!");
                            }
                            break;
                    }

                    address = value;
                }
            }
        }
    }
}
