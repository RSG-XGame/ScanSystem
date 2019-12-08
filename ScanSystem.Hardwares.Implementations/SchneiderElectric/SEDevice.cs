using ScanSystem.Hardwares.Implementations.Abstracts;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using ScanSystems.Protocols.Modbus;
using ScanSystems.Protocols.Modbus.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.SchneiderElectric
{
    public class SEDevice : Device
    {
        private ModbusProtocol protocol;
        private ModbusHelper helper;

        private List<ModbusRequest> requestes;
        private object lockerRequestes;

        public ModbusProtocol Protocol => protocol;

        public SEDevice()
        {
            lockerRequestes = new object();
            requestes = new List<ModbusRequest>();
            helper = new ModbusHelper();
        }

        public override bool SendRequest(IDeviceRequest request)
        {
            throw new NotImplementedException();
        }

        protected override IDeviceEventArgs RecivedData(byte[] data, int length)
        {
            throw new NotImplementedException();
        }

        protected override void Dispose(bool disposing)
        {
            if (!Disposed)
            {
                if (disposing)
                {
                    protocol.Dispose();
                }

                protocol = null;
            }

            base.Dispose(disposing);
        }
    }
}
