import { TestBed } from '@angular/core/testing';

import { RequisitosAdopcionService } from './requisitos-adopcion.service';

describe('RequisitosAdopcionService', () => {
  let service: RequisitosAdopcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequisitosAdopcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
