import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { LoginRegisterFrameComponent } from './login-register-frame/login-register-frame.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';


@NgModule({
   declarations: [
      AppComponent,
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
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
