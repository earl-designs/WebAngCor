import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '../../node_modules/@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterFrameComponent } from './login-register-frame/login-register-frame.component';
import { AddNewComponent } from './add-new/add-new.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AuthGuard } from './_guards/auth.guard';

import { appRoutes } from './routes';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavTopComponent,
      FooterComponent,
      LoginComponent,
      RegisterComponent,
      LoginRegisterFrameComponent,
      AddNewComponent,
      ShoppingCartComponent,
      WishlistComponent,
      EditProfileComponent
   ],
   imports: [
      HttpClientModule,
      BrowserModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
        AuthService,
        AlertifyService,
        ErrorInterceptorProvider,
        AuthGuard
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
