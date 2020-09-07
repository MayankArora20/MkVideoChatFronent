import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterToAppComponent } from './register-to-app.component';

describe('RegisterToAppComponent', () => {
  let component: RegisterToAppComponent;
  let fixture: ComponentFixture<RegisterToAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterToAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterToAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
