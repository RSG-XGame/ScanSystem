using OnionApp.Domain.Core.Entities.Processing;
using ScanSystem.Base.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Infrastructure.Business.Changes
{
    public class ChangeEventArgs : IEventArgs
    {
        public Guid Id { get; internal set; }
        public ChangeStates ChangeState { get; internal set; }
        public DateTime DTOpenChange { get; internal set; }
        public DateTime? DTCloseChange { get; internal set; }
        public List<Order> Orders { get; internal set; }
        public bool Cancel { get; set; }

        public ChangeEventArgs()
        {
            Orders = new List<Order>();
        }
    }
}
