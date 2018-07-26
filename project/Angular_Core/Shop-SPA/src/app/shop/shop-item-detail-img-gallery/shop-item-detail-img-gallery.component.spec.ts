/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShopItemDetailImgGalleryComponent } from './shop-item-detail-img-gallery.component';

describe('ShopItemDetailImgGalleryComponent', () => {
  let component: ShopItemDetailImgGalleryComponent;
  let fixture: ComponentFixture<ShopItemDetailImgGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemDetailImgGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemDetailImgGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
