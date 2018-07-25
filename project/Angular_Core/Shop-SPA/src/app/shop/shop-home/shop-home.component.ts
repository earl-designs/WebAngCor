import { Component, OnInit } from '@angular/core';
import { ShopItemService } from '../../_services/shopItem.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ShopItemForList } from '../../_models/shopItemForList';
import { Category } from '../../_models/category';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {
  shopItems: ShopItemForList[];
  categorys: Category[];

  constructor(private shopService: ShopItemService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadShop();
  }

  loadShop() {
    this.shopService.getShopItems().subscribe((shopItems: ShopItemForList[]) => {
      this.shopItems = shopItems;
    }, error => {
      this.alertify.error(error);
    });

    this.shopService.getCategorys().subscribe((categorys: Category[]) => {
      this.categorys = categorys;
    }, error => {
      this.alertify.error(error);
    });
  }

}
