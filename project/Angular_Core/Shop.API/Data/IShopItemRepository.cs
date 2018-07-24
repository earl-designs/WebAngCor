using System.Collections.Generic;
using System.Threading.Tasks;
using Shop.API.Models;

namespace Shop.API.Data
{
    public interface IShopItemRepository : IGenericRepository
    {
        Task<bool> SaveAll();
        Task<IEnumerable<ShopItem>> GetShopItem();
        Task<ShopItem> GetShopItem(int id);
    }
}