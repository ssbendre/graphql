import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { log } from 'util';
import { CustomerService } from '../../services/customer';
import { _ } from 'underscore';

@Component({
  selector: 'edit-customer-card',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
  providers: [CustomerService]
})
export class EditCustomerCardComponent implements OnInit {

  private customerId;
  private customerRes = [];

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {
    this.customerId = this.route.snapshot.params.id;
  }

  public ngOnInit() {
    this.getCustomerDetails(this.customerId);
    console.log('SSSS', this.customerRes);
  }

  private getCustomerDetails(customerId) {
    this.customerService.getCustomerDataById(this.customerId).subscribe((Resp) =>
      this.customerRes = Resp[0]
    );
  }

  private editCustomerDetails(customerId) {
    //
  }

}
