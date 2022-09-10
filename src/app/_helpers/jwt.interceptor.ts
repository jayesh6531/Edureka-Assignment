import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    const accessToken = window.sessionStorage.getItem("accessToken");

    if (accessToken) {
      const clonedRequest = request.clone({
        setHeaders: {
          accessToken: accessToken
        }
      })
      return next.handle(clonedRequest)
    }
    return next.handle(request);
  }
}
