namespace Shop.API.Models
{
    public class ShopItemImage
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
        public bool Main { get; set; }

        public ShopItem ShopItem { get; set; }
        public int ShopItemId { get; set; }
    }
}