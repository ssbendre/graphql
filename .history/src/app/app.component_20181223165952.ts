import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AI मध्ये आपले स्वागत आहे';
  fillerNav = [
    {link: '/customer-info', label: 'ग्राहक माहिती'},
    {link: '/semen-info', label: 'वीर्य माहिती'},
    {link: '/visiting-info', label: 'भेटीची माहिती'},
    {link: '/reports', label: 'अहवाल'},
    {link: '/new-user', label: 'नवीन वापरकर्ता नोंदणी'},
    {link: '/district', label: 'जिल्हा फॉर्म'},
    {link: '/customer-list', label: 'ग्राहक यादी'},
    {link: '/tehsil-form', label: 'तालुका फॉर्म'},
    {link: '/town-form', label: 'शहर / गाव फॉर्म'},
    {link: '/new-semen', label: 'नवीन वीर्य ब्रँड जतन करा'},
    {link: '/semen-buyer', label: 'वीर्य खरेदीदार यादी'},
    {link: '/semen-list', label: 'वीर्य यादी'}
  ];
  constructor(private router: Router) { }
}
