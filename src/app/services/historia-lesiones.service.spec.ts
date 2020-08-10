import { TestBed } from '@angular/core/testing';

import { HistoriaLesionesService } from './historia-lesiones.service';

describe('HistoriaLesionesService', () => {
  let service: HistoriaLesionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaLesionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
