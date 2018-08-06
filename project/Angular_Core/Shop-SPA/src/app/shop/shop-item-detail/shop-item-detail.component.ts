import { Component, OnInit, Input } from '@angular/core';
import { ShopItem } from '../../_models/shopItem';

@Component({
  selector: 'app-shop-item-detail',
  templateUrl: './shop-item-detail.component.html',
  styleUrls: ['./shop-item-detail.component.css']
})
export class ShopItemDetailComponent implements OnInit {
  @Input() shopItem: ShopItem;

  constructor() { }

  ngOnInit() {
  }
}
