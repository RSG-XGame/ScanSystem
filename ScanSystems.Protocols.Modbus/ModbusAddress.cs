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

        public int CountBits => countBits;
        public int BitNum
        {
            get { return bitNum; }
            set { Update(wordNum, value); }
        }
        public int WordNum
        {
            get { return wordNum; }
            set { Update(value, bitNum); }
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

        private void Update(string value)
        {
            if (!address.Equals(value))
            {
                Regex regex = new Regex(@"%(?<MemoryArea>[IQMiqm])(?<MemorySize>[XBWDLxbwdl])(?<MemoryAddress>\d+\.\d+|\d+)", RegexOptions.IgnorePatternWhitespace);

                Match match = regex.Match(value);
                if (match.Success)
                {
                    string memoryArea = match.Groups["MemoryArea"].Value.ToUpper();
                    string memorySize = match.Groups["MemorySize"].Value.ToUpper();
                    string memoryAddress = match.Groups["MemoryAddress"].Value.ToUpper();

                    switch (memorySize)
                    {
                        case "X":
                            countBits = 1;
                            break;

                        case "B":
                            countBits = 8;
                            break;

                        case "W":
                            countBits = 16;
                            break;

                        case "D":
                            countBits = 32;
                            break;

                        case "L":
                            countBits = 64;
                            break;
                    }

                    address = value;
                }
            }
        }
        private void Update(int wordNum, int bitNum)
        {
            if (!this.wordNum.Equals(wordNum) || !this.bitNum.Equals(bitNum))
            {

            }
        }
    }
}
