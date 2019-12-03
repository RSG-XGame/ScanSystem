using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Processing
{
    //[Table(nameof(OrderPosition), Schema = "processing")]
    public class OrderPosition : Entity<Guid>
    {
        public Guid SAPBarcodeId { get; set; }

        public SAPBarcode SAPBarcode { get; set; }
    }
}
