import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef, inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {getUsr} from "../../helper/mockdaten";
import {UserListItemComponent} from "./user-list-item/user-list-item.component";
import {User} from "../user";
import {UserService} from "../user.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'pl-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  imports: [
    UserListItemComponent,
    FormsModule
  ],
  styleUrl: './user-list.component.scss'
})
// Eltern komponente von UserListItemComponent
export class UserListComponent implements AfterViewInit, OnInit {



  // userList = getUsr();

  selectedUser?: User;


  @ViewChild('myHeader', {static: true})
  myHeader?: ElementRef<HTMLHeadingElement>;

  // erste Komponente vom Typ UserListItemComponent in der Vorlage
  @ViewChild(UserListItemComponent, {static: true})
  myUserListItemComponent?: UserListItemComponent;

  // alle Komponenten vom Typ UserListItemComponent in der Vorlage
  @ViewChildren(UserListItemComponent)
  myUserListItemComponents?: QueryList<UserListItemComponent>

  readonly $user = inject( UserService );

  setSelectedUser(user: User) {
    this.selectedUser = user;
  }

  updateFirst() {
    // this.userList[0] = { firstname: 'Saban', lastname: 'Ünlü'} as User;
  }

  ngOnInit(): void {
    return undefined; // nur gemacht damit die console stumm bleibt
    // console.log( this.myUserListItemComponent, this.myHeader ); // in init erreichbar weil static true
  }

  ngAfterViewInit(): void {

    // WICHTIG - Geht theoretisch man sollte Aber den Zustand der Komponente nicht auf diese Art ändern
    /*
    this.myUserListItemComponent!.userData = {
      firstname: 'Saban',
      lastname: 'Ünlü'
    }
    */
    this.myUserListItemComponent?.sayHello();
    // console.log( this.myUserListItemComponents?.toArray()  );

    // todo auf Änderungen reagieren
    // this.myUserListItemComponents?.changes;

  }


}
