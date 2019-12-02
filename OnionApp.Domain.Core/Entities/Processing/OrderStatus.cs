using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Processing
{
    public class OrderStatus : Entity<int>
    {
        public string OrderStatusName { get; set; }
        public string OrderStatusDescription { get; set; }

        public List<Order> Orders { get; set; }
    }
}
