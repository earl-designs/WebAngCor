import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { ShopItem } from '../_models/shopItem';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'user/' + id);
  }

  getWishlist(id): Observable<ShopItem[]> {
    return this.http.get<ShopItem[]>(this.baseUrl + 'user/wish/' + id);
  }

  getboughtlist(id): Observable<ShopItem[]> {
    return this.http.get<ShopItem[]>(this.baseUrl + 'user/bought/' + id);
  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'user/' + id, user);
  }
}
