import { TestBed } from '@angular/core/testing';

import { ProductSrvicesService } from './product-srvices.service';

describe('ProductSrvicesService', () => {
  let service: ProductSrvicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSrvicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
