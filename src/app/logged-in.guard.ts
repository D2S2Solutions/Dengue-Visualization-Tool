import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './services/user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private user: UserService) {}

  canActivate() {
    const isLoggedIn=this.user.isLoggedIn();
    if(isLoggedIn){
      return true;
    }else{
      window.location.href='login';
      return false;
    }
  }

}
