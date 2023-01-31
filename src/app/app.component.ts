import { Component } from '@angular/core';
import {AuthService} from "./core/services/auth.service";
import {LoadingSpinnerService} from "./core/services/loading-spinner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alfems-ng-ui';

  constructor(public authService: AuthService,
              public loadingSpinner: LoadingSpinnerService) {
  }
}
