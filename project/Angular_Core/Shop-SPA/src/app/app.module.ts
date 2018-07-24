import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterFrameComponent } from './login-register-frame/login-register-frame.component';

import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavTopComponent,
      FooterComponent,
      LoginComponent,
      RegisterComponent,
      LoginRegisterFrameComponent
   ],
   imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        BsDropdownModule.forRoot()
   ],
   providers: [
        AuthService,
        AlertifyService,
        ErrorInterceptorProvider
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
