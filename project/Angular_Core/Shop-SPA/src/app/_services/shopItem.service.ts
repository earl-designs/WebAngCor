import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from '../../../node_modules/rxjs';
import { ShopItemForList } from '../_models/shopItemForList';
import { Category } from '../_models/category';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ShopItemService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getShopItems(): Observable<ShopItemForList[]> {
    return this.http.get<ShopItemForList[]>(this.baseUrl + 'Shop/Items', httpOptions);
  }

  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'Shop/Categorys', httpOptions);
  }

}
