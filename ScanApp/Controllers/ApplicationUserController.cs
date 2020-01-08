using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using OnionApp.Domain.Core.Entities.Accounts;
using OnionApp.Domain.Interfaces;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private readonly ApplicationSettings AppSettings;
        private readonly IRepository Repository;

        public ApplicationUserController(IRepository repository, IOptions<ApplicationSettings> appSettings)
        {
            Repository = repository;
            AppSettings = appSettings.Value;
        }

        [HttpPost]
        [Route("Login")]
        //POST : /api/ApplicationUser/Login
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await Repository.GetFirstAsync<User>(x => x.Login == model.UserName && x.Password == model.Password);
            if (user != null)
            {
                if (user.IsDeleted)
                {
                    return BadRequest(new { message = "Пользователь заблокирован!" });
                }
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(AppSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }

            return BadRequest(new { message = "Неверный логин или пароль!" });
        }
    }
}