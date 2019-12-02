using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Devices
{
    public class Device : Entity<Guid>
    {
        public string DeviceSettings { get; set; }

        public int DeviceTypeId { get; set; }

        public DeviceType DeviceType { get; set; }
    }
}
