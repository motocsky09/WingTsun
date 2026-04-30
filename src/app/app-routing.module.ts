import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';
import { TrainerComponent } from './trainer/trainer.component';
import { GradesComponent } from './grades/grades.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'despre', component: WorkoutComponent },
  { path: 'antrenor', component: TrainerComponent },
  { path: 'grade', component: GradesComponent },
  { path: 'program', redirectTo: '/', pathMatch: 'full' },
  { path: 'contact', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
