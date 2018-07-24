using Microsoft.EntityFrameworkCore;
using Shop.API.Models;

namespace Shop.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Value> Values { get; set; }

        // User Tables
        public DbSet<User> User { get; set; }
        public DbSet<ProfilPic> ProfilPic { get; set; }

        // User - ShopItem Tables
        public DbSet<Wishlist> Wishlist { get; set; }
        public DbSet<BoughtItem> BoughtItem { get; set; }

        // ShopItem Tables
        public DbSet<ShopItem> ShopItem { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<ShopItemCategory> ShopItemCategory { get; set; }
        public DbSet<ShopItemImage> ShopItemImage { get; set; }
    }
}