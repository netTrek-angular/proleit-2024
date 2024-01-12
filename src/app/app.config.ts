import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    // UserService,
    {provide: LOCALE_ID, useValue: 'de-DE'},
    provideHttpClient(),
    provideRouter(routes)
  ]
};
