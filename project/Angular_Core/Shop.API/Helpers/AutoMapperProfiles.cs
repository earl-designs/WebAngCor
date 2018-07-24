using AutoMapper;
using Shop.API.Dtos;
using Shop.API.Models;

namespace Shop.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserDto>()
                .ForMember(dest => dest.WishlistCount, opt => {
                    opt.MapFrom(src => src.Wishlist.Count);
                })
                .ForMember(dest => dest.BoughtItemscount, opt => {
                    opt.MapFrom(src => src.BoughtItems.Count);
                });
            CreateMap<ShopItem, ShopItemDto>();
            CreateMap<ShopItem, ShopItemforListDto>();
            CreateMap<Category, CategoryDto>();

            CreateMap<Wishlist, ShopItemforListDto>();
            CreateMap<BoughtItem, ShopItemforListDto>();

        }
    }
}