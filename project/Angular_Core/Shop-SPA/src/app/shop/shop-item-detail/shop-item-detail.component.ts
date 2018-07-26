import { Component, OnInit, Input } from '@angular/core';
import { ShopItem } from '../../_models/shopItem';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { ShopItemService } from '../../_services/shopItem.service';

@Component({
  selector: 'app-shop-item-detail',
  templateUrl: './shop-item-detail.component.html',
  styleUrls: ['./shop-item-detail.component.css']
})
export class ShopItemDetailComponent implements OnInit {
  @Input() shopItemId: number;
  shopItem: ShopItem;

  constructor(private shopService: ShopItemService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.shopService.getShopItem(this.shopItemId).subscribe((shopItem: ShopItem) => {
      this.shopItem = shopItem;
    }, error => {
      this.alertify.error(error);
    });
  }
}
