import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {
    localStorage.setItem('auth_token', 'sdfsdf');
    this.loggedIn = true;
    // return this.http
    //   .post(
    //     '/login',
    //     { email, password }
    //   )
    //   .map((res: any) => {
    //     if (res.success) {
    //       localStorage.setItem('auth_token', res.auth_token);
    //       this.loggedIn = true;
    //     }
    //
    //     return res.success;
    //   });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
