using OnionApp.Domain.Core.Entities.Dict;
using OnionApp.Domain.Core.Entities.Dicts;
using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Processing
{
    [Table(name: "Orders", Schema = "processing")]
    public class Order : Entity<Guid>
    {
        [DataType(DataType.DateTime)]
        public DateTime FinishDate { get; set; }
        public int OrderStatusId { get; set; }
        public Guid? ChangeId { get; set; }
        [ForeignKey(nameof(Client))]
        public Guid ClientId { get; set; }
        public int CountPositions { get; set; }

        public Change Change { get; set; }
        public OrderStatus OrderStatus { get; set; }

        public List<Order> Orders { get; set; }
        public Client Client { get; set; }
    }
}
