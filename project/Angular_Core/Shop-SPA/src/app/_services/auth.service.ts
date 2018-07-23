import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseUrl = 'http://localhost:5000/api/auth/';
    userToken: any;

    constructor(private http: HttpClient) {}

    login(model: any) {
        return this.http
            .post(this.baseUrl + 'login', model)
            .pipe(
                map((response: any) => {
                    const user = response;
                    if (user) {
                        localStorage.setItem('token', user.token);
                    }
                })
            );
    }

    register(model: any) {
        return this.http.post(this.baseUrl + 'register', model);
    }

    loggedIn() {
        const token = localStorage.getItem('token');
        return !!token;
    }

    logout() {
      this.userToken = null;
      localStorage.removeItem('token');
      console.log('logged out');
    }
}
