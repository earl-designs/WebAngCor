import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login-register-frame',
  templateUrl: './login-register-frame.component.html',
  styleUrls: ['./login-register-frame.component.css']
})
export class LoginRegisterFrameComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  loginShow: boolean;
  registerShow: boolean;

  constructor() { }

  ngOnInit() {
    this.registerShow = true;
  }

  showLogin() {
    this.loginShow = true;
    this.registerShow = false;
  }

  showRegister() {
    this.registerShow = true;
    this.loginShow = false;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.cancelRegister.emit(registerMode);
  }

}
