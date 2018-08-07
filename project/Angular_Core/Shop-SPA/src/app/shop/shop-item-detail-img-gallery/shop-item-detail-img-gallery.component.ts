import { Component, OnInit, Input } from '@angular/core';
import { ShopItem } from '../../_models/shopItem';
import { ImgService } from '../../_services/img.service';
import { SlideImage } from '../../_models/slideImage';

@Component({
  selector: 'app-shop-item-detail-img-gallery',
  templateUrl: './shop-item-detail-img-gallery.component.html',
  styleUrls: ['./shop-item-detail-img-gallery.component.css']
})
export class ShopItemDetailImgGalleryComponent implements OnInit {
  imgScale = false;
  exampleImages: SlideImage[];
  myInterval = 0;
  activeSlideIndex = 0;
  @Input() shopItem: ShopItem;

  constructor(private imgService: ImgService) { }

  ngOnInit() {
    this.exampleImages = new Array();
    this.getImageFromService();
    console.log(this.exampleImages);
  }

  toggleScale() {
    this.imgScale = !this.imgScale;
  }

  createImageFromBlob(image: Blob, i: number, id: number) {
    const reader = new FileReader();
    if (image) {
       reader.readAsDataURL(image);
    }

    reader.onloadend = () => {
      const newimage = <SlideImage>{};
      newimage.image = reader.result;
      newimage.id = id;
      this.exampleImages[i] = newimage;
    };
 }

  getImageFromService() {
    for (let i = 0 ; i < this.shopItem.exampleImagesId.length; i++) {
      this.imgService.getShopItemImage(this.shopItem.exampleImagesId[i]).subscribe(data => {
        this.createImageFromBlob(data, i, this.shopItem.exampleImagesId[i]);
      }, error => {
        this.exampleImages[i].image = (false);
        this.exampleImages[i].id = (0);
        console.log(error);
      });
    }
  }
}
