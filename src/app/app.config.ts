import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // UserService,
    {provide: LOCALE_ID, useValue: 'de-DE'},
    provideRouter(routes)
  ]
};
