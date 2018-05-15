import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
import 'rxjs/add/operator/map';
import { _ } from 'underscore';

@Injectable()
export class CustomerService {

  private APIUrl;

  constructor( public http: HttpClient ) {
    this.APIUrl = '../../assets/mock-data/customer.json';
  }

  public getCustomerData() {
    return this.http.get(this.APIUrl);
  }

  public getCustomerDataById(customerId) {
    return this.http.get(this.APIUrl).map(( res: Response ) =>
    _.where(res, {id : Number(customerId)}));
  }

}
