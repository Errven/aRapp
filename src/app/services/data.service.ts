import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class DataService {

  url = {
    items: 'https://pacific-ocean-71911.herokuapp.com/login',
    users: 'https://pacific-ocean-71911.herokuapp.com/users'
  };

  constructor(public http: HttpService) {
  }


  getUsers(): Observable<any> {
    return this.http.get(this.url.users).map(res => res.json())
  }

  deleteUsers(userId){
    console.log(this.url.users+'/'+userId);
    return this.http.delete(this.url.users+'/'+userId);
  }

  addUser(user) {
    return this.http.post(this.url.users, user);
  }
}
