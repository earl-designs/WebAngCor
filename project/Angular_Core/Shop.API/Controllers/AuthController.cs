using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Shop.API.Dtos;
using Shop.API.Models;

namespace Shop.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly Data.IAuthRepository _repo;
        public AuthController(Data.IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if(await _repo.UserExists(userForRegisterDto.Username)){
                ModelState.AddModelError("Username", "Username already exists");
            }

            // validate request
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }

            var userToCreate = new User{
                Username = userForRegisterDto.Username
            };

            var createUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201);
        }

    }
}