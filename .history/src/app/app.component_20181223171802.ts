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
    {link: '/customer-info', label: 'ग्राहक माहिती', icon: 'event_note'},
    {link: '/semen-info', label: 'वीर्य माहिती', icon: 'info'},
    {link: '/visiting-info', label: 'भेटीची माहिती', icon: 'perm_contact_calendar'},
    {link: '/reports', label: 'अहवाल', icon: 'report'},
    {link: '/new-user', label: 'नवीन वापरकर्ता नोंदणी', icon: 'verified_user'},
    {link: '/district', label: 'जिल्हा फॉर्म', icon: 'event_note'},
    {link: '/customer-list', label: 'ग्राहक यादी', icon: 'event_note'},
    {link: '/tehsil-form', label: 'तालुका फॉर्म', icon: 'event_note'},
    {link: '/town-form', label: 'शहर / गाव फॉर्म', icon: 'event_note'},
    {link: '/new-semen', label: 'नवीन वीर्य ब्रँड जतन करा', icon: 'event_note'},
    {link: '/semen-buyer', label: 'वीर्य खरेदीदार यादी', icon: 'event_note'},
    {link: '/semen-list', label: 'वीर्य यादी', icon: 'event_note'}
  ];
  constructor(private router: Router) { }
}
