import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName:string="user name";
  password:string="password";

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    // alert("calling submit" + this.userName +this.password);
    // this.router.navigate(['']);
// alert(this.userName+this.password);
// window.location.href = '';
    this.userService.login(this.userName, this.password).subscribe(values=>{
      window.location.href = '';
    });
//       // window.location.href = '';
//     });
  }
}
