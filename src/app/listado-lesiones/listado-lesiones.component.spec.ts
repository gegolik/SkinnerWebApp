import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLesionesComponent } from './listado-lesiones.component';

describe('ListadoLesionesComponent', () => {
  let component: ListadoLesionesComponent;
  let fixture: ComponentFixture<ListadoLesionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoLesionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoLesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
