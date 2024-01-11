import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserListComponent} from "./user-list.component";
import {UserListItemComponent} from "./user-list-item/user-list-item.component";

@NgModule(
  {
    declarations: [
      UserListComponent,
      UserListItemComponent
    ],
    imports: [CommonModule],
    exports: [
      UserListComponent,
      UserListItemComponent
    ]
  }
)
export class UserListModule { }
