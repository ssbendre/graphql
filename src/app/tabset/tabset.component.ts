import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';  

import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import * as Query from '../global-query';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css'],
  providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers
})
export class TabsetComponent implements OnInit {
  private customerList: Array<any> = [];
  private customerRes: Array<any> = [];
  private page = 1;
  private start = 0; 
  private end = 8; 

  constructor(private router: Router, config: NgbTabsetConfig, private apollo: Apollo) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit() {
    this.getUsers();
  }

  ngDoCheck(){
    this.start = 8 * (this.page - 1);
    this.end = 8 * this.page;
    this.customerList = this.customerRes.slice(this.start, this.end);
  }

  test(){
    this.router.navigate(['home']);
  }

  /**
   * ----------------------------------------------------
   * Get All Users
   * ----------------------------------------------------
   * @method getUsers
   */
  getUsers() {
    this.apollo.watchQuery({ query: Query.Users })
      .valueChanges
      .map((result: any) => result.data.users).subscribe((data) => {
        console.log(data);
        this.customerRes = data;
      })
  }
}