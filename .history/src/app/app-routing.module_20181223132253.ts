import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/pages/login/login.component';
import { HomeComponent } from '../app/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
