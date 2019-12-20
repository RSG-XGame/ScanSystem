using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Accounts
{
    [Table(name: "SysFunctions", Schema = "accounts")]
    public class SysFunction : Entity<int>
    {
        public string SysFunctionName { get; set; }

        public List<Rule> Rules { get; set; }
    }
}
