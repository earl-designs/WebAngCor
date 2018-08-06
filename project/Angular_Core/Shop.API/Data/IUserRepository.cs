using System.Collections.Generic;
using System.Threading.Tasks;
using Shop.API.Models;

namespace Shop.API.Data
{
    public interface IUserRepository : IGenericRepository
    {
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<string> GetUserImagePath(int id);
        Task<IEnumerable<ShopItem>> GetWishlist(int id);
        Task<IEnumerable<ShopItem>> GetBoughtItems(int id);
    }
}