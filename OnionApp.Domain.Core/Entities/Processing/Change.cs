using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Processing
{
    [Table(nameof(Change), Schema = "processing")]
    public class Change : Entity<Guid>
    {

        public List<Order> Orders { get; set; }
    }
}
