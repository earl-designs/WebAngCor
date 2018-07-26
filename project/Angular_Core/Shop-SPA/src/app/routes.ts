import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddNewComponent } from './add-new/add-new.component';
import { AuthGuard } from './_guards/auth.guard';
import { BoughtlistComponent } from './boughtlist/boughtlist.component';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';
import { EditProfileHomeComponent } from './edit-profile/edit-profile-home/edit-profile-home.component';
import { ShopItemsResolver } from './_resolvers/shop-items-resolver';
import { CategorysResolver } from './_resolvers/categorys-resolver';
import { UserEditResolver } from './_resolvers/user-edit-resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shop', component: ShopHomeComponent, resolve: {shopItems: ShopItemsResolver, categorys: CategorysResolver}},
    {path: 'shoppingCart', component: ShoppingCartComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate : [AuthGuard],
        children: [
            {path: 'wishlist', component: WishlistComponent},
            {path: 'boughtlist', component: BoughtlistComponent},
            {path: 'editProfile', component: EditProfileHomeComponent,
                                  resolve: {user: UserEditResolver},
                                  canDeactivate: [PreventUnsavedChanges]},
            {path: 'addNew', component: AddNewComponent},
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
