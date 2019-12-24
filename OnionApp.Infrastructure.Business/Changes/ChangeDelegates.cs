using ScanSystem.Base.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Infrastructure.Business.Changes
{
    public delegate bool CloseChangeHandler(ChangeEventArgs args);
    public delegate bool OpenChangeHandler(ChangeEventArgs args);

    public delegate void ChangeUpdateHandler(ChangeEventArgs args);
}
