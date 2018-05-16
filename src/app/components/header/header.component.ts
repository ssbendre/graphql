import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() details;

  constructor(private router: Router) { }

  public ngOnInit() {
    //
  }

  private goToHomePage() {
    this.router.navigate(['home']);
  }

}
