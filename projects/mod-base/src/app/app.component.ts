import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'pl-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'modBase';

  constructor( private readonly router: Router  ) {
    /*
    this.router.events
      .pipe( filter ( evt => evt instanceof NavigationEnd ))
      .subscribe(
      evt => console.log(evt)
    );
    */
  }
}
