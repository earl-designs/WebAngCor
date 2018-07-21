using System.ComponentModel.DataAnnotations;

namespace Shop.API.Dtos
{
    public class UserForLoginDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Password must be between 4 and 8 characters")]
        public string Password { get; set; }
        
    }
}