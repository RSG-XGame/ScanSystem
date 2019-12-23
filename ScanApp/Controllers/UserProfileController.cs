using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using OnionApp.Domain.Core.Entities.Accounts;
using OnionApp.Domain.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IRepository Repository;
        public UserProfileController(IRepository repository)
        {
            Repository = repository;
        }

        [HttpGet]
        [Authorize]
        //GET : /api/UserProfile
        public async Task<object> GetUserProfile()
        {
            User user = null;
            if (int.TryParse(User.Claims.First(c => c.Type == "UserID").Value, out int userId))
            {
                user = await Repository.GetFirstAsync<User>(x => x.Id == userId);
                if (user != null)
                    user.Role = await Repository.GetFirstAsync<Role>(x => x.Id == user.RoleId);
            }

            return new
            {
                user?.UserName,
                user?.Login,
                user?.Role?.RoleName
            };
        }
    }
}