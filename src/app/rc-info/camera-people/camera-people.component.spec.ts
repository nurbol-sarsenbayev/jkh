import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraPeopleComponent } from './camera-people.component';

describe('CameraPeopleComponent', () => {
  let component: CameraPeopleComponent;
  let fixture: ComponentFixture<CameraPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
