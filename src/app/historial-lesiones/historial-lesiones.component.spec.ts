import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialLesionesComponent } from './historial-lesiones.component';

describe('HistorialLesionesComponent', () => {
  let component: HistorialLesionesComponent;
  let fixture: ComponentFixture<HistorialLesionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialLesionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialLesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
