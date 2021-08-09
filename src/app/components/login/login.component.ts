import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/credentials';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*form: any = {
    username: null,
    password: null
  };
  roles: string[] = [];*/

  credentials = new Credentials()

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = null;

  constructor(public loginService: LoginService, private router : Router) { }

  ngOnInit(): void {
  }

  doLogin(): void {
    this.loginService.doLogin(this.credentials)
    .subscribe((data: any) => {
      var loc = data['token'];
      console.log("User Logged in with token - " + data['token']);
      this.isLoggedIn = true;
    },
    (error: any) => {
      console.log(error['error']['message']);
      this.errorMessage = error['error']['message'];
      this.isLoginFailed = true;
    })
  }

  reloadPage(): void {
    window.location.reload();
  }
}
