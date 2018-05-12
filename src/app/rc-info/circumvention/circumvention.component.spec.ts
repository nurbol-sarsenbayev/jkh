import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircumventionComponent } from './circumvention.component';

describe('CircumventionComponent', () => {
  let component: CircumventionComponent;
  let fixture: ComponentFixture<CircumventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircumventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircumventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
