import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjeserviceComponent } from './ejeservice.component';

describe('EjeserviceComponent', () => {
  let component: EjeserviceComponent;
  let fixture: ComponentFixture<EjeserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjeserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
