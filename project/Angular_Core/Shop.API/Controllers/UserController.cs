using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Shop.API.Data;
using Shop.API.Dtos;
using Shop.API.Helpers;

namespace Shop.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;
        private readonly IOptions<ImageSaveSettings> _imgSettings;
        public UserController(IUserRepository repo, 
                              IMapper mapper,
                              IOptions<ImageSaveSettings> imageSaveSettings)
        {
            _mapper = mapper;
            _repo = repo;
            _imgSettings = imageSaveSettings;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();

            var usersToReturn = _mapper.Map<IEnumerable<UserDto>>(users);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> getUser(int id)
        {
            var user = await _repo.GetUser(id);

            var userToReturn = _mapper.Map<UserDto>(user);

            return Ok(userToReturn);
        }

        [HttpGet("wish/{id}")]
        public async Task<IActionResult> getWishlist(int id)
        {
            var shopItems = await _repo.GetWishlist(id);

            var shopItemsToReturn = _mapper.Map<IEnumerable<ShopItemforListDto>>(shopItems);

            return Ok(shopItemsToReturn);
        }

        [HttpGet("bought/{id}")]
        public async Task<IActionResult> getBoughtist(int id)
        {
            var shopItems = await _repo.GetBoughtItems(id);

            var shopItemsToReturn = _mapper.Map<IEnumerable<ShopItemforListDto>>(shopItems);

            return Ok(shopItemsToReturn);
        }
        
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody]UserForUpdateDto userForUpdateDto){
            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var userFromRepo = await _repo.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepo);
            if(await _repo.SaveAll()){
                return NoContent();
            }
            throw new Exception($"Updating user {id} failed on save");
        }

        [HttpPost("{id}/image")]
        public async Task<IActionResult> AddPhotoForUser(int id, [FromForm]IFormFile file)
        {
            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var userFromRepo = await _repo.GetUser(id);

            var imgFolder = _imgSettings.Value.ImageRoot + _imgSettings.Value.UserRoot;
            var guidName = Guid.NewGuid().ToString() + (Path.GetExtension(file.FileName));

            System.IO.Directory.CreateDirectory(imgFolder);

            var filePath = imgFolder +  guidName;

            if(file.Length > 0)
            {
                using(var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
            }

            var incrementPath = guidName;

            userFromRepo.PicturePath = incrementPath;

            if(await _repo.SaveAll())
            {
                return Ok(new {incrementPath});
            }

            return BadRequest("Could not save photo");
        }
    }
}