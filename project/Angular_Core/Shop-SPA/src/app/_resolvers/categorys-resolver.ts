import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ShopItemService } from '../_services/shopItem.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../_models/category';

@Injectable()
export class CategorysResolver implements Resolve<Category[]> {

    constructor(private shopService: ShopItemService,
                private alertify: AlertifyService,
                private router: Router) {}

    resolve (route: ActivatedRouteSnapshot): Observable<Category[]> {
        return this.shopService.getCategorys().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }

}
