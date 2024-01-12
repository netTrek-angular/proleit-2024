import {Component, Input} from '@angular/core';
import {UserListComponent} from "./user-list/user-list.component";
import {UserListItemComponent} from "./user-list/user-list-item/user-list-item.component";

@Component({
  selector: 'pl-user',
  standalone: true,
  imports: [
    UserListComponent,
    UserListItemComponent,
    // imports andere Komponente, Diretecive und Pipes - Module Nur für Services und Inkjectionss
  ],
  // providers: [ UserService ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input( {required: true} ) selectedUsrId?: number | string;

}
