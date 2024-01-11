import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {environment} from "./environments/environment";
import * as de from '@angular/common/locales/de';
import {registerLocaleData} from "@angular/common";

registerLocaleData(de.default);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

console.log( environment.modus );
