import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AI मध्ये आपले स्वागत आहे';
  fillerNav = [
    {link: '/customer-info', label: 'ग्राहक माहिती'},
    {link: '/customer-list', label: 'वीर्य माहिती'},
    {link: '/district', label: 'भेटीची माहिती'},
    {link: '/new-semen', label: 'अहवाल'},
    {link: '/new-user', label: 'नवीन वापरकर्ता नोंदणी'},
    {link: '/reports', label: 'जिल्हा फॉर्म'},
    {link: '/semen-buyer', label: 'ग्राहक यादी'},
    {link: '/semen-info', label: 'तालुका फॉर्म'},
    {link: '/semen-list', label: 'शहर / गाव फॉर्म'},
    {link: '/tehsil-form', label: 'नवीन वीर्य ब्रँड जतन करा'},
    {link: '/town-form', label: 'वीर्य खरेदीदार यादी'},
    {link: '/visiting-info', label: 'वीर्य यादी'}
  ];
}
