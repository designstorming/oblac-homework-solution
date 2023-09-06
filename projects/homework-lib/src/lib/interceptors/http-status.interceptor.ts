import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpStatusInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: any) => {

        if (err instanceof HttpErrorResponse) {
          const isServerError = err.status >= 500;

          // Trigger global notification through the store actions
          if (isServerError) {
            const { status, statusText } = err;
            window.alert(`Server Error ${status}: ${statusText}`);
            return EMPTY;
          }

        }

        /**
         * Any other clinet error should be caught in effect in
         * appropriate place
         */
        throw err;

      })
    );
  }
}
