

namespace Shop.API.Models
{
    public class ShopItemCategory
    {
        public int Id { get; set; }
        public int ShopItemId { get; set; }
        public int CategoryId { get; set; }

        public virtual ShopItem ShopItem { get; set; }
        public virtual Category Category { get; set; }
    }
}