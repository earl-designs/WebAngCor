using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Shop.API.Data;
using Shop.API.Dtos;

namespace Shop.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class ShopController : ControllerBase
    {
        private readonly IShopRepository _repo;
        private readonly IMapper _mapper;
        public ShopController(IShopRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [AllowAnonymous]
        [HttpGet("items")]
        public async Task<IActionResult> getShopItems()
        {
            var shopItems = await _repo.GetShopItem();

            var shopItemsToReturn = _mapper.Map<IEnumerable<ShopItemDto>>(shopItems);

            return Ok(shopItemsToReturn);
        }

        [AllowAnonymous]
        [HttpGet("item/{id}")]
        public async Task<IActionResult> getShopItem(int id)
        {
            var shopItem = await _repo.GetShopItem(id);

            var shopItemToReturn = _mapper.Map<ShopItemDto>(shopItem);

            return Ok(shopItemToReturn);
        }

        [AllowAnonymous]
        [HttpGet("categorys")]
        public async Task<IActionResult> getCategorys(int id)
        {
            var categorys = await _repo.GetCategorys();

            var categorysToReturn = _mapper.Map<IEnumerable<CategoryDto>>(categorys);

            return Ok(categorysToReturn);
        }
    }
}