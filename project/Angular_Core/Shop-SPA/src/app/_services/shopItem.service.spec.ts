/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopItemService } from './shopItem.service';

describe('Service: ShopItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopItemService]
    });
  });

  it('should ...', inject([ShopItemService], (service: ShopItemService) => {
    expect(service).toBeTruthy();
  }));
});
