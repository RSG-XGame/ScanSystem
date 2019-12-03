using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Processing
{
   // [Table(nameof(OrderStatus), Schema = "processing")]
    public class OrderStatus : Entity<int>
    {
        public string OrderStatusName { get; set; }
        public string OrderStatusDescription { get; set; }

        public List<Order> Orders { get; set; }
    }
}
