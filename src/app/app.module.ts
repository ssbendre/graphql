import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { TabsetComponent } from './tabset/tabset.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
