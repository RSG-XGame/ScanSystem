using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Dicts
{
    [Table(name: "ClientTypes", Schema = "dicts")]
    public class ClientType : Entity<int>
    {
        public string Name { get; set; }

        public List<Client> Clients { get; set; }
    }
}
