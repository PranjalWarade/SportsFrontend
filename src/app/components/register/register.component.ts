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
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
*/


  ngOnInit() {
  }

  addUser() {
    this.registerService.registerUser(this.user)
      .subscribe(data => {
        console.log(data)
      })      
  }
  /*
  onSubmit(): void {
    const { name, email, password } = this.user;
  }*/
}
