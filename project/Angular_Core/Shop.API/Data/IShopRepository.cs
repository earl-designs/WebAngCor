using System.Collections.Generic;
using System.Threading.Tasks;
using Shop.API.Models;

namespace Shop.API.Data
{
    public interface IShopRepository : IGenericRepository
    {
        Task<bool> SaveAll();
        Task<IEnumerable<ShopItem>> GetShopItem();
        Task<ShopItem> GetShopItem(int id);
        Task<string> GetShopItemImagePath(int id);
        Task<string> GetShopItemMainImagePath(int id);

        Task<IEnumerable<Category>> GetCategorys();
    }
}