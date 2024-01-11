import {Component} from '@angular/core';
import {getUsr} from "../../helper/mockdaten";
import {UserListItemComponent} from "./user-list-item/user-list-item.component";
import {User} from "../user";

@Component({
  selector: 'pl-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  imports: [
    UserListItemComponent
  ],
  styleUrl: './user-list.component.scss'
})
// Eltern komponente von UserListItemComponent
export class UserListComponent {

  userList = getUsr();
  selectedUser?: User;

  setSelectedUser(user: User) {
    this.selectedUser = user;
  }

  updateFirst() {
    this.userList[0] = { firstname: 'Saban', lastname: 'Ünlü'} as User;
  }
}
