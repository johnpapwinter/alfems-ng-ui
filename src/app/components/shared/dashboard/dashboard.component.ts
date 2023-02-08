import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] = [];
  user: MenuItem[] = [];

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home'],
      },
      {
        label: 'Task Groups',
        icon: 'pi pi-fw pi-folder',
        items: [
          {
            label: 'Task Group List',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/task-group-list'],
          },
          {
            label: 'Add Task Group',
            icon: 'pi pi-fw pi-pencil',
            routerLink: ['/add-task-group'],
            visible: this.authService.isAdmin(),
          },
          {
            label: 'Manage Task Group',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/manage-task-group'],
            visible: this.authService.isAdmin(),
          }
        ],
      },
      {
        label: 'Vessels',
        icon: 'pi pi-fw pi-folder',
        items: [
          {
            label: 'Vessel Registry',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/registry'],
          },
          {
            label: 'Add Vessel',
            icon: 'pi pi-fw pi-pencil',
            routerLink: ['/add-ship'],
            visible: this.authService.isAdmin(),
          },
          {
            label: 'Manage Vessel',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/manage-vessel'],
            visible: this.authService.isAdmin(),
          }
        ],
      },
    ]

    this.user = [
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        routerLink: ['login'],
        command: () => this.authService.removeToken(),
      }
    ]
  }
}
