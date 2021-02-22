import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrulumComponent } from './currulum.component';

describe('CurrulumComponent', () => {
  let component: CurrulumComponent;
  let fixture: ComponentFixture<CurrulumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrulumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrulumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
