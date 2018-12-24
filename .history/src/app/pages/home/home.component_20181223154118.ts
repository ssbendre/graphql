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
    'नवीन वीर्य ब्रँड जतन करा',
    'वीर्य खरेदीदार यादी',
    'वीर्य यादी'];

  constructor() { }

  ngOnInit() {
  }

}
