import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {filter, map} from "rxjs";
import {User} from "../user/user";

@Component({
  selector: 'pl-contact',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  constructor() {
    console.log('ContactComponent');
    this.activatedRoute.data
      .pipe(
        map ( (data) => data['user'] as User[] ),
        filter( (user) => user !== undefined )
      )
      .subscribe( (data) => {
        console.log('user', data);
      } );
  }
}
