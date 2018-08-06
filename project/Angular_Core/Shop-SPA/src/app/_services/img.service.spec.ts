/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImgService } from './img.service';

describe('Service: Img', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgService]
    });
  });

  it('should ...', inject([ImgService], (service: ImgService) => {
    expect(service).toBeTruthy();
  }));
});
