import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionmedicosComponent } from './administracionmedicos.component';

describe('AdministracionmedicosComponent', () => {
  let component: AdministracionmedicosComponent;
  let fixture: ComponentFixture<AdministracionmedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionmedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionmedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
