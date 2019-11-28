using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystems.Protocols.Modbus
{
    public class ModbusHelper
    {
        private ushort transactionId;
        private object lockerTransaction;

        public byte UnitId { get; set; }

        public ModbusHelper()
        {
            transactionId = 0;
            lockerTransaction = new object();
        }

        public ushort GetTransactionId()
        {
            ushort result = 0;
            lock (lockerTransaction)
            {
                result = ++transactionId;
                if (transactionId == 0)
                {
                    result = ++transactionId;
                }
            }
            return result;
        }

        public void UpdatePackage(ModbusPackage package)
        {
            package.MBAPHeader.Length = Convert.ToUInt16(2 + package.PDU.Data.Length);
            package.MBAPHeader.UnitId = UnitId;
        }
    }
}
