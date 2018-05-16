import {
  Component,
  OnInit
} from '@angular/core';

import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppState } from '../../app.service';
import { Title } from './title';
import { CustomerService } from '../../services/customer';
import { XLargeDirective } from './x-large';
import { Router } from '@angular/router';
@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    CustomerService,
    NgbTabsetConfig
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.scss' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  /**
   * Set our default values
   */
  public localState = { value: '' };
  private customerList = [];
  private customerRes;
  private pageCount = 1;
  private pageSize = 12;
  private start = 0;
  private end = 8;
  private searchText;
  private layout = 'grid';
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    public customerService: CustomerService,
    config: NgbTabsetConfig,
    private router: Router
  ) {
    config.justify = 'center';
    config.type = 'pills';
    this.customerRes = [];
  }

  public ngOnInit() {
    this.getCustomer();
  }

  public submitState(value: string) {
    this.appState.set('value', value);
    this.localState.value = '';
  }

  public ngDoCheck() {
    this.start = this.pageSize * (this.pageCount - 1);
    this.end = this.pageSize * this.pageCount;
    this.customerList = this.customerRes.slice(this.start, this.end);
  }

  /**
   * ----------------------------------------------------
   * Get All Users
   * ----------------------------------------------------
   * @method getCustomer
   */
  public getCustomer() {
    this.customerService.getCustomerData().subscribe((data) => this.customerRes = data );
  }

  private changeView(view) {
    (view === 'list') ? this.layout = 'list' : this.layout = 'grid';
  }

  private goToCustomerPage() {
    this.router.navigate(['customer']);
  }
}
