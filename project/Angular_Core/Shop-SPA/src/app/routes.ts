import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddNewComponent } from './add-new/add-new.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shoppingCart', component: ShoppingCartComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate : [AuthGuard],
        children: [
            {path: 'wishlist', component: WishlistComponent},
            {path: 'editProfile', component: EditProfileComponent},
            {path: 'addNew', component: AddNewComponent},
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
