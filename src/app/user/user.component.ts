import {Component} from '@angular/core';
import {UserListComponent} from "./user-list/user-list.component";

@Component({
  selector: 'pl-user',
  standalone: true,
  imports: [
    UserListComponent // imports andere Komponente, Diretecive und Pipes - Module Nur für Services und Inkjectionss
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {}
