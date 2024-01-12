import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SettingsComponent } from './settings/settings.component';
import { ServerComponent } from './server/server.component';


@NgModule({
  declarations: [
    AdminComponent,
    SettingsComponent,
    ServerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
