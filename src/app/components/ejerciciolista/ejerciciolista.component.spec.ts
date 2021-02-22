import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciolistaComponent } from './ejerciciolista.component';

describe('EjerciciolistaComponent', () => {
  let component: EjerciciolistaComponent;
  let fixture: ComponentFixture<EjerciciolistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjerciciolistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
