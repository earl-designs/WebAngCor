import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../_models/category';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {
  @Input() categorys: Category[];

  constructor() { }

  ngOnInit() {
  }

}
