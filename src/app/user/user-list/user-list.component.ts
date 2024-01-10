import { Component } from '@angular/core';
import {getUsr} from "../../helper/mockdaten";
import {UserListItemComponent} from "./user-list-item/user-list-item.component";

@Component({
  selector: 'pl-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  imports: [
    UserListItemComponent
  ],
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  userList = getUsr();
}
