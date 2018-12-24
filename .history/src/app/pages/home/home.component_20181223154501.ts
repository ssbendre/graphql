import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  fillerNav = [
    {link: '', label: 'ग्राहक माहिती'},
    {link: '', label: 'वीर्य माहिती'},
    {link: '', label: 'भेटीची माहिती'},
    {link: '', label: 'अहवाल'},
    {link: '', label: 'नवीन वापरकर्ता नोंदणी'},
    {link: '', label: 'जिल्हा फॉर्म'},
    {link: '', label: 'ग्राहक यादी'},
    {link: '', label: 'तालुका फॉर्म'},
    {link: '', label: 'शहर / गाव फॉर्म'},
    {link: '', label: 'नवीन वीर्य ब्रँड जतन करा'},
    {link: '', label: 'वीर्य खरेदीदार यादी'},
    {link: '', label: 'वीर्य यादी'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
