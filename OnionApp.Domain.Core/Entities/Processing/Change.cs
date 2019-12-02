using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Processing
{
    public class Change : Entity<Guid>
    {

        public List<Order> Orders { get; set; }
    }
}
