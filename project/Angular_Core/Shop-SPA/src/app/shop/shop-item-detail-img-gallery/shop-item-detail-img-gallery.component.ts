import { Component, OnInit, Input } from '@angular/core';
import { ShopItem } from '../../_models/shopItem';

@Component({
  selector: 'app-shop-item-detail-img-gallery',
  templateUrl: './shop-item-detail-img-gallery.component.html',
  styleUrls: ['./shop-item-detail-img-gallery.component.css']
})
export class ShopItemDetailImgGalleryComponent implements OnInit {
  myInterval = 0;
  @Input() shopItem: ShopItem;

  constructor() { }

  ngOnInit() {
  }

}
