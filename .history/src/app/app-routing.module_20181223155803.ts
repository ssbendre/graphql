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
import { VisitingInfoComponent } from '../app/pages/visiting-info/visiting-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customer-info', component: CustomerInfoComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'login', component: DistrictFormComponent },
  { path: 'home', component: NewSemenListComponent },
  { path: 'login', component: NewUserComponent },
  { path: 'home', component: ReportsComponent },
  { path: 'login', component: SemenBuyerListComponent },
  { path: 'home', component: SemenInfoComponent },
  { path: 'login', component: SemenListComponent },
  { path: 'home', component: TehsilFormComponent },
  { path: 'login', component: TownFormComponent },
  { path: 'home', component: VisitingInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
