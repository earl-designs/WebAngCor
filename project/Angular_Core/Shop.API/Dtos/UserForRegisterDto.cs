using System;
using System.ComponentModel.DataAnnotations;

namespace Shop.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters")]
        public string Password { get; set; }

        public DateTime Created { get; set; }

        public UserForRegisterDto()
        {
            Created = DateTime.Now;
        }
    }
}