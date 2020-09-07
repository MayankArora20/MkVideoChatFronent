import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMeetingsComponent } from './see-meetings.component';

describe('SeeMeetingsComponent', () => {
  let component: SeeMeetingsComponent;
  let fixture: ComponentFixture<SeeMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
