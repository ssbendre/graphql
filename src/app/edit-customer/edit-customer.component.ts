import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'edit-customer-card',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerCardComponent implements OnInit {

//   @Input() details;

  constructor(private router: Router) { }

  public ngOnInit() {
    //
    console.log('SSSS');
  }

}
