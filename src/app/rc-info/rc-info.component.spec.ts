import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcInfoComponent } from './rc-info.component';

describe('RcInfoComponent', () => {
  let component: RcInfoComponent;
  let fixture: ComponentFixture<RcInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
