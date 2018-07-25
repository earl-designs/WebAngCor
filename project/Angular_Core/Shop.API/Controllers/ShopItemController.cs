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
    public class ShopItemController : ControllerBase
    {
        private readonly IShopItemRepository _repo;
        private readonly IMapper _mapper;
        public ShopItemController(IShopItemRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetShopItems()
        {
            var shopItems = await _repo.GetShopItem();

            var shopItemsToReturn = _mapper.Map<IEnumerable<ShopItemforListDto>>(shopItems);

            return Ok(shopItemsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> getShopItem(int id)
        {
            var shopItem = await _repo.GetShopItem(id);

            var shopItemToReturn = _mapper.Map<ShopItemDto>(shopItem);

            return Ok(shopItemToReturn);
        }
    }
}