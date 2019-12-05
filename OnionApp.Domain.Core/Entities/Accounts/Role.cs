using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Accounts
{
    [Table("Roles", Schema = "accounts")]
    public class Role : Entity<int>
    {
        public string RoleName { get; set; }

        public List<User> Users { get; set; }
        public List<Rule> Rules { get; set; }
    }
}
