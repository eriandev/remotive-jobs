import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { JobsComponent } from 'src/app/pages/jobs/jobs.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jobs/:id',
    component: JobsComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }