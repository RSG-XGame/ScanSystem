using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Logs
{
    [Table(name: "LogTypes", Schema = "logger")]
    public class LogType : Entity<int>
    {
        public string Name { get; set; }

        public List<Log> Logs { get; set; }
    }
}
