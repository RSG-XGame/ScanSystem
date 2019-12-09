using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace ScanApp.Hubs
{
    [Authorize]
    public class ChatHub : Hub
    {
        public async Task Send(string message, string userName)
        {
            await Clients.All.SendAsync("Receive", message, userName);
        }

        public override async Task OnConnectedAsync()
        {
            await Clients.All.SendAsync("Notify", $"{Context.User.Identity.Name} вошел в чат");
            await base.OnConnectedAsync();
        }
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await Clients.All.SendAsync("Notify", $"{Context.User.Identity.Name} покинул в чат");
            //Context.User.Identity.AuthenticationType
            await base.OnDisconnectedAsync(exception);
        }
    }
}
