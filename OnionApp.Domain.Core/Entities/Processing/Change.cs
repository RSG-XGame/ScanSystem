using OnionApp.Domain.Core.Entities.Dict;
using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Processing
{
    [Table(name: "Changes", Schema = "processing")]
    public class Change : Entity<Guid>
    {
        public DateTime OpenDate { get; set; }
        public DateTime? CloseDate { get; set; }
        public int ChangeStateId { get; set; }

        public ChangeState ChangeState { get; set; }
        public List<Order> Orders { get; set; }
    }
}
