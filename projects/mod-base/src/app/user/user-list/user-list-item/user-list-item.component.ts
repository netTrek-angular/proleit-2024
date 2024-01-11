import {Component, EventEmitter, HostListener, Input, Optional, Output} from '@angular/core';
import {User} from "../../user";
import {UserListComponent} from "../user-list.component";

@Component({
  selector: 'pl-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.scss'
})
export class UserListItemComponent {
  @Input() userData!: User;
  @Output() selectUsr = new EventEmitter<User>();

  constructor(@Optional() private readonly userlist? : UserListComponent)
  {
    if(!userlist)
    {
      throw new Error("User-list-item is only valid as child from user list")
    }
  }


  @HostListener('click')
  triggerEvent() {
    this.selectUsr.emit(this.userData);
  }
}
