using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Logs
{
    [Table(name: "Logs", Schema = "logger")]
    public class Log : Entity<Guid>
    {
        public string ModuleName { get; set; }
        public string ClassName { get; set; }
        public string MethodName { get; set; }
        public string Message { get; set; }
        [ForeignKey(nameof(LogType))]
        public int LogTypeId { get; set; }

        public LogType LogType { get; set; }
    }
}
