import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TabsetComponent } from '../tabset/tabset.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [TabsetComponent] // add NgbTabsetConfig to the component providers
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
