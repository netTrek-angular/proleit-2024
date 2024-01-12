import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'pl-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor( private readonly router: Router ) {
  }

  navigateTo( ...pathSeq: string[] ) {
    this.router.navigate( pathSeq );
  }

  navigateToUser() {
    this.navigateTo( 'user' );
  }

  navigateToUserWithId ( id : number = 1 ) {
    this.navigateTo( 'user', id.toString(10) );
  }
}
