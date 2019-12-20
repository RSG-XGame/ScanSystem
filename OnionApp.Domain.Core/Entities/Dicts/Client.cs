using OnionApp.Domain.Core.Entities.Processing;
using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Dicts
{
    [Table(name: "Clients", Schema = "dicts")]
    public class Client : Entity<Guid>
    {
        public string Name { get; set; }

        [ForeignKey(nameof(ClientType))]
        public int ClientTypeId { get; set; }

        public ClientType ClientType { get; set; }

        public List<Order> Orders { get; set; }
    }
}
