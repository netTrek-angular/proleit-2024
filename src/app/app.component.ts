import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {UserListComponent} from "./user/user-list/user-list.component";

@Component({
  selector: 'pl-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    UserComponent,
    UserListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proleit';
}
