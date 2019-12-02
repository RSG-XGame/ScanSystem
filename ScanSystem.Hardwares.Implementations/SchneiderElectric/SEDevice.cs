using ScanSystem.Hardwares.Implementations.Abstracts;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using ScanSystems.Protocols.Modbus.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.SchneiderElectric
{
    public class SEDevice : Device
    {
        private ModbusProtocol protocol;

        public ModbusProtocol Protocol => protocol;

        public SEDevice()
        {
            protocol = new ModbusProtocol();
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
