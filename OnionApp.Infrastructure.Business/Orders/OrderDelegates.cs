using OnionApp.Domain.Core.Entities.Processing;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Infrastructure.Business.Orders
{
    public delegate void OrderStatusChangedHandler(Order order, OrderEventArgs args);
}
