import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {DataService} from './data.service';


@Injectable()
export class UserService extends DataService{
  private loggedIn = false;

  constructor(private http: Http) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(userName, password) {
    // localStorage.setItem('auth_token', 'sdfsdf');
    // this.loggedIn = true;
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http
      .post(
        this.baseUrl+'login',
        { userName,password },
        // {headers}
      )
      .map((res: any) => {
        alert(res);
        if (res.success) {

          localStorage.setItem('auth_token', res.userName);
          this.loggedIn = true;
        }

        return res.success;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
