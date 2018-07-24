using System.Collections.Generic;

namespace Shop.API.Models
{
    public class Category
    {
        
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<ShopItemCategory> ShopItems  { get; set; }
    }
}