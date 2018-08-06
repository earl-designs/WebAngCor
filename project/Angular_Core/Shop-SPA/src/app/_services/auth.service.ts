import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseUrl = environment.apiUrl + 'auth/';
    userToken: any;
    jwtHelper = new JwtHelperService();
    decodedToken: any;

    constructor(private http: HttpClient,
                private alertify: AlertifyService,
                private router: Router) {}

    login(model: any) {
        return this.http
            .post(this.baseUrl + 'login', model)
            .pipe(
                map((response: any) => {
                    const user = response;
                    if (user) {
                        localStorage.setItem('token', user.token);
                        this.decodedToken = this.jwtHelper.decodeToken(user.token);
                        console.log(this.decodedToken);
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
      this.router.navigate(['/home']);
    }
}
