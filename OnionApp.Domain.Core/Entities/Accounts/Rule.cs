using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Accounts
{
    //[Table(nameof(Rule), Schema = "accounts")]
    public class Rule : Entity<Guid>
    {
        public int SysFunctionId { get; set; }
        public int RoleId { get; set; }

        public SysFunction SysFunction { get; set; }
        public Role Role { get; set; }
    }
}
