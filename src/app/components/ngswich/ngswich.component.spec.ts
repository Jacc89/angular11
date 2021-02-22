import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswichComponent } from './ngswich.component';

describe('NgswichComponent', () => {
  let component: NgswichComponent;
  let fixture: ComponentFixture<NgswichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgswichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
