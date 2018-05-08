import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css'],
  providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers
})
export class TabsetComponent implements OnInit {

  constructor(config: NgbTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit() {
  }

}