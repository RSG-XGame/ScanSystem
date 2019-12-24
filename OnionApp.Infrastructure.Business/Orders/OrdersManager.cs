using OnionApp.Domain.Core.Entities.Processing;
using OnionApp.Infrastructure.Business.Changes;
using OnionApp.Infrastructure.Business.Devices;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Infrastructure.Business.Orders
{
    /// <summary>
    /// Класс управления заказами
    /// </summary>
    public class OrdersManager
    {
        private readonly List<Order> activeOrders;

        public ChangeManager ChangeManager { get; private set; }
        public DevicesManager DevicesManager { get; private set; }
        public event OrderStatusChangedHandler OrderStatusChanged;

        public OrdersManager()
        {
            //выгрузка активных заказов для оперативной обработки
            activeOrders = new List<Order>();
            InitializeActiveOrders();


        }

        #region инициализация
        public void Initialize(ChangeManager changeManager, DevicesManager devicesManager)
        {
            ChangeManager = changeManager;
        }

        private void InitializeActiveOrders()
        {
        }
        #endregion


        public void CreateOrder()
        {
        }
        public void ExecuteOrder()
        {
        }
        public void CompleteOrder()
        {
        }
        public void PauseOrder()
        {
        }
    }
}
