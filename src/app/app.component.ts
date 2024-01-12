import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {BindingsComponent} from "./samples/bindings/bindings.component";
import {CountdownComponent} from "./samples/countdown/countdown.component";
import {ConditionAndLoopsComponent} from "./samples/condition-and-loops/condition-and-loops.component";
import {DangerDirective} from "./helper/danger.directive";
import {PipeSamplesComponent} from "./samples/pipe-samples/pipe-samples.component";
import {UserService} from "./user/user.service";
import {ThemeService} from "./helper/theme.service";

@Component({
  selector: 'pl-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    UserComponent,
    UserListComponent,
    BindingsComponent,
    CountdownComponent,
    ConditionAndLoopsComponent,
    DangerDirective, PipeSamplesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proleit';
  readonly $theme = inject( ThemeService);

  // im Constructor injizieren - old school
  constructor( public readonly $user: UserService ) {}

  switchTheme( theme: 'light' | 'dark' = 'light' ) {
    this.$theme.setTheme( theme );
  }
}
