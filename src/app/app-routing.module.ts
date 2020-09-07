import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeeMeetingsComponent } from './see-meetings/see-meetings.component';
import { SetMeetingsComponent } from './set-meetings/set-meetings.component';
import { AboutAppComponent } from './about-app/about-app.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'SeeMeetings', component: SeeMeetingsComponent},
  {path: 'SetMeeting', component: SetMeetingsComponent},
  {path: 'AboutProject', component: AboutAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
