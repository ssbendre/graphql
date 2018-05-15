import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { AboutComponent } from './pages/about';
import { EditCustomerCardComponent } from './pages/edit-customer';
import { CustomerInfoComponent } from './pages/customer-info';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'customer/info/:id', component: CustomerInfoComponent },
  { path: 'customer/:id', component: EditCustomerCardComponent },
  { path: '**',    component: NoContentComponent },
];
