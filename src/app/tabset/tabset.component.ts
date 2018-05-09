import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css'],
  providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers
})
export class TabsetComponent implements OnInit {
  private customerList = [
    {
      "name" : "Rahul",
      "address" : "Pune",
      "phone" : "123456789",
      "email" : "Test!@test.com",
      "gender" : "male",
      "__v" : 0
    },

    {
      "name" : "Trupti",
      "address" : "Pune",
      "phone" : "13245789",
      "email" : "Test!@test.com",
      "gender" : "female",
      "__v" : 0
    },

    {
      "name" : "Ganesh",
      "address" : "Pune",
      "phone" : "123456789",
      "email" : "Test!@test.com",
      "gender" : "male",
      "__v" : 0
    },

    {
      "name" : "Preeti",
      "address" : "Pune",
      "phone" : "13245789",
      "email" : "Test!@test.com",
      "gender" : "female",
      "__v" : 0
    },

    {
      "name" : "Sagar",
      "address" : "Pune",
      "phone" : "123456789",
      "email" : "Test!@test.com",
      "gender" : "male",
      "__v" : 0
    },

    {
      "name" : "Dipti",
      "address" : "Pune",
      "phone" : "13245789",
      "email" : "Test!@test.com",
      "gender" : "female",
      "__v" : 0
    },

    {
      "name" : "Nilesh",
      "address" : "Pune",
      "phone" : "123456789",
      "email" : "Test!@test.com",
      "gender" : "male",
      "__v" : 0
    },

    {
      "name" : "Pallavi",
      "address" : "Pune",
      "phone" : "13245789",
      "email" : "Test!@test.com",
      "gender" : "female",
      "__v" : 0
    }
  ];

  constructor(private router: Router, config: NgbTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit() {
   
  }

  test(){
    this.router.navigate(['home']);
  }

}