import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterEmployeeService } from 'src/app/services/register-employee.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  constructor(public registerService: RegisterEmployeeService, private router : Router) { }

  /*form: any = {
    username: null,
    email: null,
    password: null
  };*/
  isSignUpSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';



  ngOnInit() {
  }

  addUser() {
    this.registerService.registerUser(this.user)
      .subscribe((data: any) => {
        console.log("User created with id - " + data['email']);
        this.isSignUpSuccessful = true;
      },
      (error: any) => {
        console.log(error['error']['message']);
        this.isSignUpFailed = true;
      })
  }

  onSubmit(): void {

  }
}
