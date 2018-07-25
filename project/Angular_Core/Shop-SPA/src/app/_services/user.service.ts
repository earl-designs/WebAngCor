import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { Observable } from '../../../node_modules/rxjs';
import { ShopItemForList } from '../_models/shopItemForList';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'user/', httpOptions);
  }

  getWishlist(id): Observable<ShopItemForList[]> {
    return this.http.get<ShopItemForList[]>(this.baseUrl + 'user/wish/' + id, httpOptions);
  }

  getboughtlist(id): Observable<ShopItemForList[]> {
    return this.http.get<ShopItemForList[]>(this.baseUrl + 'user/bought/' + id, httpOptions);
  }

}
