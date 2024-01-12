import {Route, Routes} from '@angular/router';
import {ContactComponent} from "./contact.component";
import {FormComponent} from "./form/form.component";
import {MapComponent} from "./map/map.component";
import {contactResolver} from "./contact.resolver";
import {contactGuard} from "./contact.guard";

export const CONTACT_ROUTES: Routes = [

  {
    path:'',
    component: ContactComponent,
    resolve: { user: contactResolver },
    canActivate: [contactGuard],
    children: [
      {path: 'form', component: FormComponent},
      {path: 'map', component: MapComponent},
      {path: '', redirectTo: 'form', pathMatch: 'full'}
    ]
  },
];


export default [...CONTACT_ROUTES] satisfies Route[];
