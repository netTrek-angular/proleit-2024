import {Routes} from '@angular/router';
import {PipeSamplesComponent} from "./samples/pipe-samples/pipe-samples.component";
import {RxjsComponent} from "./samples/rxjs/rxjs.component";

export const routes: Routes = [

  {path:'user', loadComponent: () => import('./user/user.component')
      .then ( mod => mod.UserComponent)},
  {path:'user/:selectedUsrId', loadComponent: () => import('./user/user.component')
      .then ( mod => mod.UserComponent)},
  {path:'conditions', loadComponent: () => import('./samples/condition-and-loops/condition-and-loops.component')
      .then (mod => mod.ConditionAndLoopsComponent)},
  {path:'pipe', component: PipeSamplesComponent},
  {path:'rxjs', component: RxjsComponent},
  {path:'admin', loadChildren: () => import('./admin/admin.routes').then(mod => mod.AdminRoutes)},
  {path:'contact', loadChildren: () => import('./contact/contact.routes')},
  {path:'', redirectTo: '/user', pathMatch: 'full'},
  {path:'**', redirectTo: '/user'}
];
