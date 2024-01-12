import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {SettingsComponent} from "./settings/settings.component";
import {ServerComponent} from "./server/server.component";

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: 'settings', component: SettingsComponent  },
      { path: 'server', component: ServerComponent  },
      { path: '', redirectTo: 'settings', pathMatch: 'full' }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
