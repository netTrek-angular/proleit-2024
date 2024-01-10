import { Component } from '@angular/core';

@Component({
  selector: 'pl-user',
  templateUrl: './user.component.html',
  // template: `<div>{{users[1].name}}</div>`,
  // styleUrls: ['./user.component.scss']
  styleUrl: './user.component.scss',
  // styles: `button { display: block; }`
})
export class UserComponent {
  users: { name: string }[] =
    [
      { name: 'John' },
      { name: 'Jane' }
    ];

  addThirdUsr() {
    if ( this.users.length === 3 ) {
      this.changeUser(2);
      return;
    }
    this.users [2] = { name: 'Max' } ;
  }

  changeUser( index: number ) {
    const {name} = this.users[ index ];
    if ( name.endsWith( 'changed' ) ) {
      this.users[ index ].name = name.substring( 0, name.length - 8 );
      return;
    }
    this.users[ index ].name += ' changed';
  }
}
