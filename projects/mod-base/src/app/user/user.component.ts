import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map} from "rxjs";

@Component({
  selector: 'pl-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {

  constructor( private readonly activatedRouter: ActivatedRoute ) {
    this.activatedRouter.paramMap
      .pipe(
        map( paramMap => paramMap.get( 'id' ) ),
        filter( id => !!id )
      ).subscribe( (id)=> {
        console.log( id );
      })

  }

}
