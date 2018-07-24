using System;
using System.Collections.Generic;

namespace Shop.API.Dtos
{
    public class ShopItemforListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public ICollection<string> ExampleImages { get; set; }
        public ICollection<CategoryDto> Categorys { get; set; }
        public DateTime PublishDate { get; set; }
        public DateTime CreateDate { get; set; }
    }
}