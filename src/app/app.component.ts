import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {BindingsComponent} from "./samples/bindings/bindings.component";
import {CountdownComponent} from "./samples/countdown/countdown.component";
import {ConditionAndLoopsComponent} from "./samples/condition-and-loops/condition-and-loops.component";
import {DangerDirective} from "./helper/danger.directive";

@Component({
  selector: 'pl-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    UserComponent,
    UserListComponent,
    BindingsComponent,
    CountdownComponent,
    ConditionAndLoopsComponent,
    DangerDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proleit';

  get linkRef(): HTMLLinkElement {
    if ( !this._linkRef ) {
      this._linkRef = document.createElement('link');
      this._linkRef.rel = 'stylesheet';
      document.head.append( this._linkRef );
    }
    return this._linkRef;
  }

  private _linkRef?: HTMLLinkElement;

  constructor() {
    this.switchTheme();
  }

  switchTheme( theme: 'light' | 'dark' = 'light' ) {
    this.linkRef.href = `${theme}.css`;
  }

}
