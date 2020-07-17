import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoContentComponent } from './tratamiento-content.component';

describe('TratamientoContentComponent', () => {
  let component: TratamientoContentComponent;
  let fixture: ComponentFixture<TratamientoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
