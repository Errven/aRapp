import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {
    login: '',
    password: '',
  };

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  userLogin() {
    this.userService.userLogin(this.user).filter(res => res.status !== 500).subscribe(res => {
      console.log(res);
      localStorage.setItem('user', res.token);
      this.userService.user.next(res.token);
      this.router.navigateByUrl('admin');
    });
    return false;
  }

}
