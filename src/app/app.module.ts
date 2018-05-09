import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { TabsetComponent } from './tabset/tabset.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphQLModule } from './graphql.module';

const routes = [
    {
        path: '',
        redirectTo: 'home', // we'll look at redirects below
        pathMatch: 'full'
    }, {
        path: 'home',
        component: AppComponent
    }, {
        path: 'home2',
        component: AppComponent
    }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerCardComponent,
    CustomerManagerComponent,
    CustomerInfoComponent,
    TabsetComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true}),
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
