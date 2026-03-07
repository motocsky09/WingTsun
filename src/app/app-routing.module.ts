import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'despre', component: WorkoutComponent }, 
  { path: 'program', component: HomeComponent }, 
  { path: 'contact', component: HomeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
