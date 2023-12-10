import { TestBed } from '@angular/core/testing';

import  DeliveryPageService from './delivery-page.service';

describe('DeliveryPageService', () => {
  let service: DeliveryPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
