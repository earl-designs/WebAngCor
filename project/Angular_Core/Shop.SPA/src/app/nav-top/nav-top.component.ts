import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      console.log('logged in successfully');
    }, error => {
      console.log(error);
    });
  }

  logout() {
    this.authService.userToken = null;
    localStorage.removeItem('token');
    console.log('logged out');
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
