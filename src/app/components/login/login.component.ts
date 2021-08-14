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
  errorMessage = '';

  constructor(public loginService: LoginService, private router : Router) { }

  ngOnInit(): void {
  }

  doLogin(): void {
    this.loginService.doLogin(this.credentials)
    .subscribe((data: any) => {
      this.loginService.saveToken(data['token']);
      this.isLoggedIn = true;
    },
    (error: any) => {
      console.log(error['error']['message']);
      var errorMsg = 'Please enter valid credentials';
      this.errorMessage = errorMsg;
      this.isLoggedIn = false;
      this.isLoginFailed = true;
    })
  }

  reloadPage(): void {
    window.location.reload();
  }
}
