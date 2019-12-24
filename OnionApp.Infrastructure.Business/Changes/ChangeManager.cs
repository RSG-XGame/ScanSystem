using OnionApp.Domain.Core.Entities.Processing;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace OnionApp.Infrastructure.Business.Changes
{
    /// <summary>
    /// Класс управления сменой
    /// </summary>
    public class ChangeManager
    {
        private DateTime nextDateChange;
        private Change change;
        private CloseChangeHandler closeChangeMethod;
        private OpenChangeHandler openChangeMethod;
        private ManualResetEvent changeOpened;

        public bool AutoChange { get; set; }
        public TimeSpan TimeAutoReopenChange { get; set; }
        public Change Change => change;
        public event ChangeUpdateHandler ChangeUpdate;

        public ChangeManager()
        {
            changeOpened = new ManualResetEvent(false);
        }

        public void Initialize(OpenChangeHandler openChangeMethod, CloseChangeHandler closeChangeMethod)
        {

        }


        public void Open()
        {
        }
        public void Close()
        {
        }


        private bool OpenChange()
        {
            bool result = false;

            changeOpened.Set();
            return result;
        }
        private bool CloseChange()
        {
            bool result = false;

            changeOpened.Reset();
            return result;
        }
    }
}
