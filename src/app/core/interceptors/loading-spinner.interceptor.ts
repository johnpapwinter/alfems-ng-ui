import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {LoadingSpinnerService} from "../services/loading-spinner.service";

@Injectable()
export class LoadingSpinnerInterceptor implements HttpInterceptor {

  constructor(private loadingSpinnerService: LoadingSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingSpinnerService.show();

    return next.handle(request)
      .pipe(tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.loadingSpinnerService.hide();
          }
        },
        (error: ErrorEvent) => {
          this.loadingSpinnerService.hide();
        }
      ));
  }
}
