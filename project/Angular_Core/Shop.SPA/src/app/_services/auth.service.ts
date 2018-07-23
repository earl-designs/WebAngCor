import { Injectable } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseUrl = 'http://localhost:5000/api/auth/';
    jwtHelper = new JwtHelperService();
    userToken: any;

    constructor(private http: HttpClient, private alertify: AlertifyService) {}

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
        return !this.jwtHelper.isTokenExpired(token);
    }

    logout() {
      this.userToken = null;
      localStorage.removeItem('token');
      this.alertify.message('logged out');
    }
}
