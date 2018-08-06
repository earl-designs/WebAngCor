import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login-register-frame',
  templateUrl: './login-register-frame.component.html',
  styleUrls: ['./login-register-frame.component.css']
})
export class LoginRegisterFrameComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cancelRegisterMode(registerMode: boolean) {
    this.cancelRegister.emit(registerMode);
  }

}
