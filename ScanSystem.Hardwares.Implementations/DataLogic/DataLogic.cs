﻿using ScanSystem.Hardwares.Implementations.Abstracts;
using ScanSystem.Hardwares.Interfaces.CommonDevice;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScanSystem.Hardwares.Implementations.DataLogic
{
    public class DataLogic : Device
    {
        public override bool SendRequest(IDeviceRequest request)
        {
            CheckDisposed();
            throw new NotSupportedException("Для устройств типа Data Logic функция отправки запроса не поддерживается!");
        }

        protected override IDeviceEventArgs RecivedData(byte[] data, int length)
        {
            CheckDisposed();
            DataLogicSettings settings = Settings as DataLogicSettings;
            DataLogicEventArgs result = new DataLogicEventArgs { Data = new string[0] };
            result.Data = Encoding.UTF8.GetString(data, 0, length).Split(new string[] { settings.BeginSplitter, settings.EndSplitter }, StringSplitOptions.RemoveEmptyEntries);
            return result;
        }

        protected override void PollingRequests()
        {
        }
        protected override void Connect()
        {
        }
        protected override void Disconnect()
        {
        }
    }
}
