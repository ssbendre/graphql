import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  @Input() details;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private goToCustomerEditPage(){
    this.router.navigate(['customer']);
  }
}