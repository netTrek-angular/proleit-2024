import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'pl-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  encapsulation: ViewEncapsulation.Emulated // default
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.None
})
export class UserComponent {
  users: { name: string }[] =
    [
      { name: 'Saban' },
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
/*

export class UserComponent {

  users =
    [ { name: 'saban' },
      { name: 'saban2' }
  ];

  chgNameByInd (index: number) {
    if ( this.users.length === 3 ) {
      this.users[index].name = 'saban changed';
    }
    this.users[index] = { name: 'news' };
  }


  name = 'saban';
  chgName() {
    this.name = 'saban changed';
  }
}
*/
