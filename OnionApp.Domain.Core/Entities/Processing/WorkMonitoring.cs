using OnionApp.Domain.Core.Entities.Dict;
using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Processing
{
    [Table(name: "WorkMonitorings", Schema = "processing")]
    public class WorkMonitoring : Entity<Guid>
    {
        public Guid OrderId { get; set; }
        public int ReasonComplationId { get; set; }
        [Column(name: nameof(AdditionalInformation), TypeName = "text")]
        public string AdditionalInformation { get; set; }

        public ReasonCompletion ReasonCompletion { get; set; }
        public Order Order { get; set; }
    }
}
