using ScanSystem.Base.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Infrastructure.Business.Orders
{
    public class OrderEventArgs : IEventArgs
    {
        public OrderStatuses NewStatus { get; internal set; }
    }
}
