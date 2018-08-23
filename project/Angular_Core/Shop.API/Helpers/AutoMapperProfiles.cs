using System.Collections.Generic;
using System.Linq;
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
                
            CreateMap<UserForUpdateDto, User>();
            CreateMap<UserForRegisterDto, User>();
                
            CreateMap<ShopItem, ShopItemDto>()
                .ForMember(dest => dest.ExampleImagesId, opt => {
                    opt.MapFrom(src => src.ExampleImages.Select(s => s.Id));
                })
                .ForMember(dest => dest.Categorys, opt => {
                    opt.MapFrom(src => src.Categorys.Select(s => s.Category.Name));
                });

            CreateMap<ShopItem, ShopItemforListDto>()
                .ForMember(dest => dest.MainImageId, opt => {
                    opt.MapFrom(src => src.ExampleImages.FirstOrDefault(p => p.Main == true).Id);
                });
            
            CreateMap<ShopItem, ShopItemForEditDto>();

            CreateMap<Category, CategoryDto>();
            CreateMap<ShopItemImage, ShopItemImageDto>();

            CreateMap<Wishlist, ICollection<ShopItemforListDto>>();
            CreateMap<BoughtItem, ICollection<ShopItemforListDto>>();

        }
    }
}