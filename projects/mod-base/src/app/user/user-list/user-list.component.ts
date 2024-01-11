import { Component } from '@angular/core';
import {getUsr} from "../../helper/mockdaten";
import {User} from "../../../../../../src/app/user/user";

@Component({
  selector: 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  userList = getUsr();
  selectedUser?: User;

  setSelectedUser(user: User) {
    this.selectedUser = user;
  }
}
