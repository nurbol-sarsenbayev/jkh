import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRcComponent } from './about-rc.component';

describe('AboutRcComponent', () => {
  let component: AboutRcComponent;
  let fixture: ComponentFixture<AboutRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
