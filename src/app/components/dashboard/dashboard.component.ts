import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  items: any;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/home'],
      },
      {
        label: 'Registry',
        routerLink: ['/registry'],
      },
      {
        label: 'Add',
        routerLink: ['/add-ship'],
      },
    ]
  }
}
