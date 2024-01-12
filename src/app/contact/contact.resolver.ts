import { ResolveFn } from '@angular/router';
import {Observable} from "rxjs";
import {User} from "../user/user";
import {inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export const contactResolver: ResolveFn<Observable<User[]>> = (route, state) => {
  console.log( route, state );
  return inject(HttpClient).get<User[]>( 'http://localhost:3000/users');
};
