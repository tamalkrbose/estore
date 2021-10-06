import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Records', url: '/records', icon: 'mail' },
    { title: 'Dashboard', url: '/dashboard', icon: 'paper-plane' },
    
    { title: 'Print', url: '/print', icon: 'paper-plane' }
  ];
//  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
