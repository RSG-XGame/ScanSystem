using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Infrastructure.Business.Orders
{
    public enum OrderStatuses
    {
        Creating = 1,
        Created = 2,
        Execute = 3,
        Paused = 4,
        Completed = 5,
    }
}
