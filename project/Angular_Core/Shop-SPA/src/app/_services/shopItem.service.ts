import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../_models/category';
import { ShopItem } from '../_models/shopItem';

@Injectable({
  providedIn: 'root'
})
export class ShopItemService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getShopItems(): Observable<ShopItem[]> {
    return this.http.get<ShopItem[]>(this.baseUrl + 'shop/items');
  }

  getShopItem(id): Observable<ShopItem> {
    return this.http.get<ShopItem>(this.baseUrl + 'shop/item/' + id);
  }

  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'shop/categorys');
  }

}
