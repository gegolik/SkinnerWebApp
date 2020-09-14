import { TestBed } from '@angular/core/testing';

import { RecomendacionServiceService } from './recomendacion-service.service';

describe('RecomendacionServiceService', () => {
  let service: RecomendacionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecomendacionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
