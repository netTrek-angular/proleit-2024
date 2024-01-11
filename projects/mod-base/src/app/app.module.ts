import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UserListModule} from "./user/user-list/user-list.module";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserListModule,
  ],
  providers: [],
  exports: [
    UserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
