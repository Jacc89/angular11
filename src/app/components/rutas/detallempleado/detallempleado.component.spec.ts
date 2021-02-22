import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallempleadoComponent } from './detallempleado.component';

describe('DetallempleadoComponent', () => {
  let component: DetallempleadoComponent;
  let fixture: ComponentFixture<DetallempleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallempleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
