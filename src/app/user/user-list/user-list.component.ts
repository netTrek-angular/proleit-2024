import {AfterContentInit, Component, ContentChild, ContentChildren, QueryList} from '@angular/core';
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
export class UserListComponent implements AfterContentInit{


  userList = getUsr();
  selectedUser?: User;

  // erste Komponente vom Typ UserListItemComponent transkuldiert
  @ContentChild(UserListItemComponent)
  myUserListItemComponent?: UserListItemComponent;

  // verwenden wenn mehrere Komponenten vom Typ UserListItemComponent transkuldiert werden
  @ContentChildren(UserListItemComponent)
  myUserListItemComponents?: QueryList<UserListItemComponent>

  setSelectedUser(user: User) {
    this.selectedUser = user;
  }

  updateFirst() {
    this.userList[0] = { firstname: 'Saban', lastname: 'Ünlü'} as User;
  }

  ngAfterContentInit(): void {

    console.log( this.myUserListItemComponents?.toArray() );

    // todo auf Änderungen reagieren
    // this.myUserListItemComponents?.changes;

    /*
    this.myUserListItemComponent!.userData = {
      firstname: 'Saban',
      lastname: 'Ünlü'
    }

    */
  }


}
