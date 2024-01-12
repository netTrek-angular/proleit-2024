import {Routes} from '@angular/router';
import {SettingsComponent} from "./settings/settings.component";
import {ServerComponent} from "./server/server.component";

export const AdminRoutes: Routes = [
  {path:'settings', component: SettingsComponent},
  {path:'server', component: ServerComponent},
];
