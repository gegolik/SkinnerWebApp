import { TestBed } from '@angular/core/testing';

import { AdministracionmedicosserviceService } from './administracionmedicosservice.service';

describe('AdministracionmedicosserviceService', () => {
  let service: AdministracionmedicosserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministracionmedicosserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
