import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterFrameComponent } from './login-register-frame/login-register-frame.component';

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
        BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
