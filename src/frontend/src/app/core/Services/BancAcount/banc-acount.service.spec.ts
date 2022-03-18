import { TestBed } from '@angular/core/testing';

import { BancAcountService } from './banc-acount.service';

describe('BancAcountService', () => {
  let service: BancAcountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancAcountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
