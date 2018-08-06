import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { ShopItem } from '../../_models/shopItem';
import { ImgService } from '../../_services/img.service';

@Component({
  selector: 'app-shop-item-detail-img-gallery',
  templateUrl: './shop-item-detail-img-gallery.component.html',
  styleUrls: ['./shop-item-detail-img-gallery.component.css']
})
export class ShopItemDetailImgGalleryComponent implements OnInit {
  imgScale = false;
  exampleImages: any[];
  myInterval = 0;
  @Input() shopItem: ShopItem;

  constructor(private imgService: ImgService) { }

  ngOnInit() {
    this.exampleImages = new Array();
    this.getImageFromService();
  }

  toggleScale() {
    this.imgScale = !this.imgScale;
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
       this.exampleImages.push(reader.result);
    }, false);

    if (image) {
       reader.readAsDataURL(image);
    }
 }

  getImageFromService() {
    for (let i = 0 ; i < this.shopItem.exampleImagesId.length; i++) {
      this.imgService.getShopItemImage(this.shopItem.exampleImagesId[i]).subscribe(data => {
        this.createImageFromBlob(data);
      }, error => {
        this.exampleImages.push(false);
        console.log(error);
      });
    }
  }
}
