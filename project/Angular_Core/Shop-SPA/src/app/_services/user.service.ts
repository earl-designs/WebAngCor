import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { ShopItemForList } from '../_models/shopItemForList';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'user/');
  }

  getWishlist(id): Observable<ShopItemForList[]> {
    return this.http.get<ShopItemForList[]>(this.baseUrl + 'user/wish/' + id);
  }

  getboughtlist(id): Observable<ShopItemForList[]> {
    return this.http.get<ShopItemForList[]>(this.baseUrl + 'user/bought/' + id);
  }

}
