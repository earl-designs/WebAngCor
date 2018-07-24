using System.Collections.Generic;
using Newtonsoft.Json;
using Shop.API.Models;

namespace Shop.API.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        public Seed(DataContext context)
        {
            _context = context;
        }

        public void SeedData(){
            SeedCategory();
            SeedShopItem();
            SeedUsers();
        }

        public void SeedCategory(){
            var categoryData = System.IO.File.ReadAllText("Database/SeedData/CategorySeedData.json");
            var categorys = JsonConvert.DeserializeObject<List<Category>>(categoryData);
            foreach(var category in categorys)
            {
                _context.Category.Add(category);
            }
            _context.SaveChanges();
        }

        public void SeedShopItem(){            
            var shopItemData = System.IO.File.ReadAllText("Database/SeedData/ShopItemSeedData.json");
            var shopItems = JsonConvert.DeserializeObject<List<ShopItem>>(shopItemData);
            var i = 1;
            foreach(var shopItem in shopItems)
            {
                shopItem.ExampleImages = new ShopItemImage[]{
                    new ShopItemImage{
                        Name = "Image Name " + i,
                        Path = "Database/img/SeedImg/" + i + ".jpg",
                        Main = true
                    }
                };
                shopItem.Categorys = new ShopItemCategory[]{
                    new ShopItemCategory{
                        ShopItem = shopItem,
                        Category = _context.Category.Find(1)
                    },
                    new ShopItemCategory{
                        ShopItem = shopItem,
                        Category = _context.Category.Find(5)
                    },
                    new ShopItemCategory{
                        ShopItem = shopItem,
                        Category = _context.Category.Find(9)
                    }
                };
                _context.ShopItem.Add(shopItem);
                i ++;
            }
            _context.SaveChanges();
        }

        public void SeedUsers(){
            var userData = System.IO.File.ReadAllText("Database/SeedData/UserSeedData.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);
            foreach (var user in users) 
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash("password", out passwordHash, out passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.Username = user.Username.ToLower();
                
                user.Wishlist = new Wishlist[]{
                    new Wishlist{
                        User = user,
                        ShopItem = _context.ShopItem.Find(1)
                    },
                    new Wishlist{
                        User = user,
                        ShopItem = _context.ShopItem.Find(2)
                    },
                    new Wishlist{
                        User = user,
                        ShopItem = _context.ShopItem.Find(3)
                    }
                };

                user.BoughtItems = new BoughtItem[]{
                    new BoughtItem{
                        User = user,
                        ShopItem = _context.ShopItem.Find(4)
                    },
                    new BoughtItem{
                        User = user,
                        ShopItem = _context.ShopItem.Find(5)
                    },
                    new BoughtItem{
                        User = user,
                        ShopItem = _context.ShopItem.Find(6)
                    },
                };

                _context.User.Add(user);
            }
            _context.SaveChanges();
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}