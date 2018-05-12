import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraTechnicsComponent } from './camera-technics.component';

describe('CameraTechnicsComponent', () => {
  let component: CameraTechnicsComponent;
  let fixture: ComponentFixture<CameraTechnicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraTechnicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraTechnicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
