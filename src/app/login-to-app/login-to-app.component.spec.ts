import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginToAppComponent } from './login-to-app.component';

describe('LoginToAppComponent', () => {
  let component: LoginToAppComponent;
  let fixture: ComponentFixture<LoginToAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginToAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginToAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
