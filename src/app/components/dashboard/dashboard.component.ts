import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(public authService: AuthService) {
  }

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
      {
        label: 'Logout',
        routerLink: ['login'],
        command: () => localStorage.clear(),
      }
    ]
  }
}
