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
  private showSaveBtn = false;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {
    this.customerId = this.route.snapshot.params.id;
  }

  public ngOnInit() {

    if (this.customerId) {
      this.getCustomerDetails(this.customerId);
    } else {
      this.showSaveBtn = true;
    }

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
