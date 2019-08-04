import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PupilsComponent } from './components/pupils/pupils.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { RecordsComponent } from './components/records/records.component';


const routes: Routes = [
  {
    'path': 'pupils',
    component: PupilsComponent
  },
  {
    'path': 'tasks',
    component: TasksComponent
  },
  {
    'path': 'records',
    component: RecordsComponent
  },
  {
    path: '**',
    redirectTo: 'pupils',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
