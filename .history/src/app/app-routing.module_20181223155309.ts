import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/pages/login/login.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { CustomerInfoComponent } from '../app/pages/customer-info/customer-info.component';
import { CustomerListComponent } from '../app/pages/customer-list/customer-list.component';
import { DistrictFormComponent } from '../app/pages/district-form/district-form.component';
import { NewSemenListComponent } from '../app/pages/new-semen-list/new-semen-list.component';
import { NewUserComponent } from '../app/pages/new-user/new-user.component';
import { ReportsComponent } from '../app/pages/reports/reports.component';
import { SemenBuyerListComponent } from '../app/pages/semen-buyer-list/semen-buyer-list.component';
import { SemenInfoComponent } from '../app/pages/semen-info/semen-info.component';
import { SemenListComponent } from '../app/pages/semen-list/semen-list.component';
import { TehsilFormComponent } from '../app/pages/tehsil-form/tehsil-form.component';
import { TownFormComponent } from '../app/pages/town-form/town-form.component';
import { CustomerInfoComponent } from '../app/pages/customer-info/customer-info.component';

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
