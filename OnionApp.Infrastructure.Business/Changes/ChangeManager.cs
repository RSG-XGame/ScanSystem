using OnionApp.Domain.Core.Entities.Processing;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Infrastructure.Business.Changes
{

    public class ChangeManager
    {
        private DateTime nextDateChange;
        private Change change;
        private CloseChangeHandler closeChangeMethod;
        private OpenChangeHandler openChangeMethod;

        public bool AutoChange { get; set; }
        public TimeSpan TimeAutoReopenChange { get; set; }
        public Change Change => change;

        public ChangeManager()
        {
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

            return result;
        }
        private bool CloseChange()
        {
            bool result = false;

            return result;
        }
    }
}
