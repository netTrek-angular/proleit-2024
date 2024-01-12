import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UserListModule} from "./user/user-list/user-list.module";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './contact/form/form.component';
import { MapComponent } from './contact/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    ContactComponent,
    FormComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserListModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    UserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
