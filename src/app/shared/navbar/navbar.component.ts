import {Component, OnInit, ViewChild} from '@angular/core';
import {any} from "codelyzer/util/function";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any;
  constructor(private userService: UserService) {
    this.user = localStorage.getItem('user');
    this.userService.user.subscribe(user => {
      this.user = user;
      console.log(user);
    })
  }

  ngOnInit() {
  }

  removeVideo() {
    if (document.querySelector('video'))
      document.querySelector('video').remove();
  }

  logout() {
    this.userService.user.next(null);
  }
}
