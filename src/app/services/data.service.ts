import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class DataService {

  url = {
    items: 'https://pacific-ocean-71911.herokuapp.com/items',
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

  getItems(): Observable<any> {
    return this.http.get(this.url.items).map(res => res.json())
  }

  deleteItems(itemId){
    console.log(this.url.users+'/'+itemId);
    return this.http.delete(this.url.items+'/'+itemId);
  }

  addItems(item) {
    return this.http.post(this.url.items, item);
  }

  editItems(item) {
    return this.http.put(this.url.items, item);
  }
}
