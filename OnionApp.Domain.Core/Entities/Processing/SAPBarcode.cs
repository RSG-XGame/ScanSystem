using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Processing
{
    public class SAPBarcode : Entity<Guid>
    {
        public Guid OrderId { get; set; }
        public string Barcode { get; set; }
        public bool IsScanned { get; set; }

        public Order Order { get; set; }
        public List<OrderPosition> OrderPositions { get; set; }
    }
}
