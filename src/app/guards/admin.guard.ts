import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log(localStorage.getItem('user'));
    if (!localStorage.getItem('user')) {
      this.router.navigate(['/unauthorized']);
      return false;
    } else {
      return true;
    }
  }
}
