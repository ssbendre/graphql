import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  fillerNav = [
    'ग्राहक माहिती',
    'वीर्य माहिती',
    'भेटीची माहिती',
    'अहवाल',
    'नवीन वापरकर्ता नोंदणी',
    'जिल्हा फॉर्म',
    'ग्राहक यादी',
    'तालुका फॉर्म',
    'शहर / गाव फॉर्म',
    'नवीन वीर्य ब्रँड जतन करा'];

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  constructor() { }

  ngOnInit() {
  }

}
