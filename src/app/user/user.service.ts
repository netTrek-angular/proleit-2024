import {getUsr} from "../helper/mockdaten";
import {inject, Injectable, LOCALE_ID} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly userList = getUsr();
  readonly locale = inject( LOCALE_ID );

  constructor(  ) {
    console.log( 'constructor', this.userList, this.locale );
  }

  updateFirst() {
    this.userList[0] = { firstname: 'Saban', lastname: 'Ünlü'};
  }
}
