import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

  getUserImage(id: number): Observable<Blob>  {
    return this.http.get(this.baseUrl + 'img/user/' + id, { responseType: 'blob' });
  }

  getShopItemImage(id: number): Observable<Blob>  {
    return this.http.get(this.baseUrl + 'img/shopitemimage/' + id, { responseType: 'blob' });
  }

  getShopItemMainImage(id: number): Observable<Blob>  {
    return this.http.get(this.baseUrl + 'img/shopitemmain/' + id, { responseType: 'blob' });
  }
}
