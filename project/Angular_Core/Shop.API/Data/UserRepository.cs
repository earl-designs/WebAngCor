using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shop.API.Models;

namespace Shop.API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
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

        public async Task<User> GetUser(int id)
        {
            var user = await _context.User.Include(p => p.BoughtItems)
                                          .Include(p => p.Wishlist)
                                          .FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.User.Include(p => p.BoughtItems)
                                           .Include(p => p.Wishlist)
                                           .ToListAsync();
            return users;
        }

        public async Task<string> GetUserImagePath(int id)
        {
            var user = await _context.User.FirstOrDefaultAsync(x => x.Id == id);
            var imagePath = user.PicturePath;
            return imagePath;
        }

        public async Task<IEnumerable<ShopItem>> GetBoughtItems(int id)
        {
            var shopItems = await _context.Wishlist.Where(w => w.UserId == id)
                                                   .Select(s => s.ShopItem)
                                                   .Include(p => p.Categorys).ThenInclude(x => x.Category)
                                                   .Include(p => p.ExampleImages)
                                                   .ToArrayAsync();
            return shopItems;
        }

        public async Task<IEnumerable<ShopItem>> GetWishlist(int id)
        {
            var shopItems = await _context.BoughtItem.Where(w => w.UserId == id)
                                                     .Select(s => s.ShopItem)
                                                     .Include(p => p.Categorys).ThenInclude(x => x.Category)
                                                     .Include(p => p.ExampleImages)
                                                     .ToArrayAsync();
            return shopItems;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}