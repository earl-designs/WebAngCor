using System;

namespace Shop.API.Models
{
    public class ProfilPic
    {
        public int Id { get; set; }
        public string Path { get; set; }

        public User User { get; set; }
        public int UserId { get; set; }
    }
}