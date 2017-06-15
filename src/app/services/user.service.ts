import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpService} from "./http.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class UserService {

  user: Subject<string> = new Subject<string>();

  urlLogin: string = 'https://pacific-ocean-71911.herokuapp.com/login';
  constructor(private http: HttpService) {
    this.user.next(localStorage.getItem('user'));
    console.log('test');
  }

  userLogin(user): Observable<any>{
    return this.http.post(this.urlLogin, user)
      .map(res => res.json());
  }
}
