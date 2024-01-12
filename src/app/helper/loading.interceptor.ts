import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {finalize, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {

  counter = 0;

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.counter ++
    console.log( 'Counter: ', this.counter)
    return next.handle( req ).pipe(
      finalize(() => {
        this.counter --;
        console.log('Finalize');
        console.log( 'Counter: ', this.counter)
      })
    )

  }
}
