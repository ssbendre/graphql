import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AI मध्ये आपले स्वागत आहे';
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
}
