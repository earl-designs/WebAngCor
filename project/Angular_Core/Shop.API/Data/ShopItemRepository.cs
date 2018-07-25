﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shop.API.Models;

namespace Shop.API.Data
{
    public class ShopItemRepository : IShopItemRepository
    {
        private readonly DataContext _context;
        public ShopItemRepository(DataContext context)
        {
            _context = context;
        }
        
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<IEnumerable<ShopItem>> GetShopItem()
        {
            var shopItems = await _context.ShopItem
                                          .Include(p => p.Categorys)
                                          .Include(p => p.ExampleImages)
                                          .ToListAsync();

            return shopItems;
        }

        public async Task<ShopItem> GetShopItem(int id)
        {
            var shopItems = await _context.ShopItem
                                          .Include(p => p.Categorys).ThenInclude(x => x.Category)
                                          .Include(p => p.ExampleImages)
                                          .FirstOrDefaultAsync(u => u.Id == id);

            return shopItems;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}