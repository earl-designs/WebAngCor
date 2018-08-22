import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { BsDropdownModule, TabsModule, BsDatepickerModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from '../../node_modules/ng2-file-upload';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavTopComponent } from './common-components/nav-top/nav-top.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { LoginComponent } from './common-components/login-register-frame/login/login.component';
import { RegisterComponent } from './common-components/login-register-frame/register/register.component';
import { LoginRegisterFrameComponent } from './common-components/login-register-frame/login-register-frame.component';
import { AddNewComponent } from './add-new/add-new.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AuthGuard } from './_guards/auth.guard';

import { appRoutes } from './routes';
import { BoughtlistComponent } from './boughtlist/boughtlist.component';
import { UserService } from './_services/user.service';
import { ShopItemService } from './_services/shopItem.service';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';
import { ShopItemCardComponent } from './shop-item/shop-item-card/shop-item-card.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';
import { ShopItemDetailComponent } from './shop-item/shop-item-detail/shop-item-detail.component';
import { ShopItemsResolver } from './_resolvers/shop-items-resolver';
import { CategorysResolver } from './_resolvers/categorys-resolver';
import { ShopItemDetailImgGalleryComponent } from './shop-item/shop-item-detail-img-gallery/shop-item-detail-img-gallery.component';
import { EditProfileHomeComponent } from './edit-profile/edit-profile-home/edit-profile-home.component';
import { UserEditResolver } from './_resolvers/user-edit-resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { UserImageEditComponent } from './edit-profile/user-image-edit/user-image-edit.component';
export function tokenGetter() {
    return localStorage.getItem('token');
}

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
      BoughtlistComponent,
      ShopHomeComponent,
      ShopItemCardComponent,
      ShopCategoryComponent,
      ShopItemDetailComponent,
      ShopItemDetailImgGalleryComponent,
      EditProfileHomeComponent,
      UserImageEditComponent,
      UserImageEditComponent
   ],
   imports: [
      HttpClientModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      TabsModule.forRoot(),
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      CarouselModule.forRoot(),
      ModalModule.forRoot(),
      NgbModule.forRoot(),
      FileUploadModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
          config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
          }
      })
   ],
   providers: [
        AuthService,
        UserService,
        ShopItemService,
        AlertifyService,
        ErrorInterceptorProvider,
        AuthGuard,
        PreventUnsavedChanges,
        ShopItemsResolver,
        CategorysResolver,
        UserEditResolver
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
