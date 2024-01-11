import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {User} from "../../user";

@Component({
  selector: 'pl-user-list-item',
  standalone: true,
  imports: [],
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.scss'
})

// Kinds Komponente von UserListComponent
export class UserListItemComponent {
  // required: true -> muss übergeben werden - geht erst ab ng17
  @Input( {required: true}) userData!: User;
  @Output() selectUsr = new EventEmitter<User>();

  @HostListener('click')
  triggerEvent() {
    this.selectUsr.emit(this.userData);
  }
}
