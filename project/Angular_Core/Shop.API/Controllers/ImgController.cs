using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Shop.API.Data;
using Shop.API.Helpers;

namespace Shop.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class ImgController : ControllerBase
    {
        private readonly IOptions<ImageSaveSettings> _imgSettings;
        private readonly IUserRepository _userRepo;
        private readonly IShopRepository _shopRepo;
        public ImgController(IUserRepository userRepo,
                             IShopRepository shopRepo,
                             IOptions<ImageSaveSettings> imageSaveSettings)
        {
            _shopRepo = shopRepo;
            _userRepo = userRepo;
            _imgSettings = imageSaveSettings;
        }

        [AllowAnonymous]
        [HttpGet("User/{id}")]
        public async Task<IActionResult> GetUserImage(int id)
        {
            var imagePath = await _userRepo.GetUserImagePath(id);
            var image = System.IO.File.OpenRead(_imgSettings.Value.ImageRoot + _imgSettings.Value.UserRoot + imagePath);

            return File(image, "image/jpeg");
        }

        [AllowAnonymous]
        [HttpGet("ShopItemImage/{id}")]
        public async Task<IActionResult> GetShopItemImage(int id)
        {
            var path = await _shopRepo.GetShopItemImagePath(id);
            try{
                var image = System.IO.File.OpenRead(_imgSettings.Value.ImageRoot + _imgSettings.Value.ShopItemRoot + path);
                return File(image, "image/jpeg");
            }catch{

            }
            return NotFound();

        }

        [AllowAnonymous]
        [HttpGet("ShopItemMain/{id}")]
        public async Task<IActionResult> GetShopItemMainImage(int id)
        {
            var path = await _shopRepo.GetShopItemMainImagePath(id);
            try{
                var image = System.IO.File.OpenRead(_imgSettings.Value.ImageRoot + _imgSettings.Value.ShopItemRoot + path);
                return File(image, "image/jpeg");
            }catch{

            }
            return NotFound();

        }

    }
}