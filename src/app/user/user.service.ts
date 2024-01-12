import {getUsr} from "../helper/mockdaten";
import {computed, effect, Injectable, signal, untracked} from "@angular/core";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly users = signal( getUsr() );

  readonly allFirstnames = computed( () =>
    this.users().map( u => u.firstname ) );

  readonly allLastnames = computed( () =>
    this.users().map( u => u.firstname ) );

  readonly selectedIndex = signal( -1 );

  firstname: string = '';
  lastname: string = '';

  // effects sind in NG17 noch nicht als Release zu interpretieren
  private eff = effect( () => {
    // mit untracked sorge ich dafür, dass ich nur den wert von selectedIndex bekomme aber ich auf Änderungen nicht reagiere
    console.log( 'users changed', this.users(), untracked( this.selectedIndex ) );
  } );



  addUser( ...newUser: User[] ) {
    this.users.update( value => [ ...value, ...newUser ] ); // immutable
    this.reset ();
    return this.users();
  }

  delAllUsers() {
    this.users.set( [] );
    this.reset ();
    return [];
  }

  delUserAt( index: number ) {
    const users = this.users();
    return this.deleteIndexInList(index, users);
  }

  private deleteIndexInList(index: number, users: User[]) {
    if (index > -1) {
      users.splice(index, 1);
      this.users.update(() => [...users]);
    }
    this.reset();
    return users;
  }

  delUser( user: User ) {
    const users = this.users();
    const foundedInd = users
      .findIndex( u => u.firstname === user.firstname && u.lastname === user.lastname );
    return this.deleteIndexInList(foundedInd, users);
  }

  updateUserAt ( index: number, user: User ) {
    const users = [...this.users()];
    if ( users[index] ) {
      users[index] = user;
    }
    this.users.update( () => users );
    this.reset ();
    return users;
  }


  setAsSelected($index: number) {
    const {firstname, lastname} = this.users()[$index];
    if ( this.firstname === firstname && this.lastname === lastname ) {
      this.firstname = '';
      this.lastname = '';
      this.selectedIndex.set( -1 );
    } else if ( firstname && lastname ) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.selectedIndex.set( $index );
    }
  }

  private reset() {
    this.firstname = '';
    this.lastname = '';
    this.selectedIndex.set( -1 );
  }
}
