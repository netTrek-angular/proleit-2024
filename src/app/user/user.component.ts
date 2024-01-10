import {Component} from '@angular/core';
import {UserListComponent} from "./user-list/user-list.component";

@Component({
  selector: 'pl-user',
  standalone: true,
  imports: [ UserListComponent ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {}
