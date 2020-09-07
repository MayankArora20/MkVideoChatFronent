import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMeetingsComponent } from './set-meetings.component';

describe('SetMeetingsComponent', () => {
  let component: SetMeetingsComponent;
  let fixture: ComponentFixture<SetMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
