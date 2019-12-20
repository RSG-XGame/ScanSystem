using OnionApp.Domain.Core.Entities.Dict;
using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Devices
{
    [Table(name: "Devices", Schema = "devices")]
    public class Device : Entity<Guid>
    {
        [Column(name: nameof(DeviceSettings), TypeName = "json")]
        public string DeviceSettings { get; set; }

        public int DeviceTypeId { get; set; }

        public DeviceType DeviceType { get; set; }
    }
}
