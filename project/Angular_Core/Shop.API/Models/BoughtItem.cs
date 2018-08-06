

namespace Shop.API.Models
{
    public class BoughtItem
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ShopItemId { get; set; }

        public virtual User User { get; set; }
        public virtual ShopItem ShopItem { get; set; }
    }
}