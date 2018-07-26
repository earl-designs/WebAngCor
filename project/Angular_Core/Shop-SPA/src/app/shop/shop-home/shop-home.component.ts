import { Component, OnInit } from '@angular/core';
import { ShopItemService } from '../../_services/shopItem.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ShopItemForList } from '../../_models/shopItemForList';
import { Category } from '../../_models/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {
  shopItems: ShopItemForList[];
  categorys: Category[];

  constructor(private shopService: ShopItemService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.shopItems = data['shopItems'];
      this.categorys = data['categorys'];
    });
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
