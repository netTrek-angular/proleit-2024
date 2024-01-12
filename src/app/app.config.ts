import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from "@angular/common/http";
import {autInterceptor} from "./helper/aut.interceptor";
import {LoadingInterceptor} from "./helper/loading.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    // UserService,
    {provide: LOCALE_ID, useValue: 'de-DE'},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors( [
        // autInterceptor
      ] )
    ),
    provideRouter(routes, withComponentInputBinding() )
  ]
};
