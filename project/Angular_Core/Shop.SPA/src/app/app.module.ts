import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { LoginRegisterFrameComponent } from './login-register-frame/login-register-frame.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavTopComponent,
      HomeComponent,
      LoginRegisterFrameComponent,
      RegisterComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      FormsModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
