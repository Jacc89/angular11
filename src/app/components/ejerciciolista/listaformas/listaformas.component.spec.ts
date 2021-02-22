import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaformasComponent } from './listaformas.component';

describe('ListaformasComponent', () => {
  let component: ListaformasComponent;
  let fixture: ComponentFixture<ListaformasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaformasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaformasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
