import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginToAppComponent } from './login-to-app/login-to-app.component';
import { RegisterToAppComponent } from './register-to-app/register-to-app.component';
import { SeeMeetingsComponent } from './see-meetings/see-meetings.component';
import { SetMeetingsComponent } from './set-meetings/set-meetings.component';
import { MeetingCardComponent } from './meeting-card/meeting-card.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginToAppComponent,
    RegisterToAppComponent,
    SeeMeetingsComponent,
    SetMeetingsComponent,
    MeetingCardComponent,
    AboutAppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
