using System;
using System.Collections.Generic;

namespace Shop.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get ; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime CreateDate { get; set; }  

        public string PreName { get; set; }
        public string LastName { get; set; }

        public string PicturePath { get; set; }
        public virtual ICollection<Wishlist> Wishlist { get; set; }
        public virtual ICollection<BoughtItem> BoughtItems { get; set; }
    }
}