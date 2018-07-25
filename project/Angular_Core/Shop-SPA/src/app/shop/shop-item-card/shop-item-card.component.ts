import { Component, OnInit, Input } from '@angular/core';
import { ShopItemForList } from '../../_models/shopItemForList';

@Component({
  selector: 'app-shop-item-card',
  templateUrl: './shop-item-card.component.html',
  styleUrls: ['./shop-item-card.component.css']
})
export class ShopItemCardComponent implements OnInit {
  @Input() shopItem: ShopItemForList;

  constructor() { }

  ngOnInit() {
  }

}
