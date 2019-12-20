using OnionApp.Domain.Core.Entities.Devices;
using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Dict
{
    [Table(name: "DeviceTypes", Schema = "dicts")]
    public class DeviceType : Entity<int>
    {
        [MaxLength(64)]
        public string DeviceTypeName { get; set; }
        [MaxLength]
        public string DeviceTypeDescription { get; set; }

        public List<Device> Devices { get; set; }
    }
}
