using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shop.API.Models;

namespace Shop.API.Data
{
    public class ShopRepository : IShopRepository
    {
        private readonly DataContext _context;
        public ShopRepository(DataContext context)
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
            // var exampleImages = await _context.ShopItemImage.OrderBy(o => o.Main == true).Where(w => w.ShopItemId == id).ToListAsync();
            // shopItems.ExampleImages = exampleImages;

            return shopItems;
        }
        
        public async Task<IEnumerable<Category>> GetCategorys()
        {
            var categorys = await _context.Category.ToListAsync();

            return categorys;
        }
        
        public async Task<string> GetShopItemImagePath(int id)
        {
            var shopItemImage = await _context.ShopItemImage.OrderBy(o => o.Main == true)
                                                            .FirstOrDefaultAsync(x => x.Id == id);

            var path = shopItemImage?.Path;

            return path;
        }
        
        public async Task<string> GetShopItemMainImagePath(int id)
        {
            var shopItemImage = await _context.ShopItemImage.FirstOrDefaultAsync(x => x.ShopItemId == id && x.Main == true);
            
            var path = shopItemImage?.Path;

            return path;
        }


        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}