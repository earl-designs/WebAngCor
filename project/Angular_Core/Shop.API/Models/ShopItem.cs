using System;
using System.Collections.Generic;

namespace Shop.API.Models
{
    public class ShopItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public ICollection<ShopItemImage> ExampleImages { get; set; }
        public virtual ICollection<ShopItemCategory> Categorys { get; set; }
        public DateTime PublishDate { get; set; }
        public DateTime CreateDate { get; set; }
    }
}