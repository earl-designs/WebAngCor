import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ImgService } from '../../_services/img.service';
import { ShopItem } from '../../_models/shopItem';

@Component({
  selector: 'app-shop-item-card',
  templateUrl: './shop-item-card.component.html',
  styleUrls: ['./shop-item-card.component.css']
})
export class ShopItemCardComponent implements OnInit {
  mainImage: any;
  isImageLoading: boolean;
  @Input() shopItem: ShopItem;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private imgService: ImgService) {}

  ngOnInit() {
    this.getImageFromService();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
       this.mainImage = reader.result;
    }, false);

    if (image) {
       reader.readAsDataURL(image);
    }
 }

  getImageFromService() {
    this.imgService.getShopItemMainImage(this.shopItem.id).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = true;
    }, error => {
    this.isImageLoading = false;
      console.log(error);
    });
  }
}
