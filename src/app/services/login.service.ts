import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 isSignedIn = false;

  private baseUrl = "http://localhost:9000"
  constructor(private http : HttpClient) {}

  //Calling Server to generate token

  public doLogin(credentials: any){
    return this.http.post(`${this.baseUrl}/token`, credentials)
  }

  //for login User
  async login(token: string){
    localStorage.setItem("token", token);
    this.isSignedIn = true;
    return true;
  }
  //to check if user is loggedin
  async isLoggedIn(){
    let token = localStorage.getItem("token");

    if(token == undefined || token == null || token == '' ){
      this.isSignedIn = false;
      return false
    }else{
      this.isSignedIn = true;
      return true;
    }
  }

  //for logout
  async logout(){
    localStorage.removeItem("token");
    this.isSignedIn=false;
    return true;
  }

  //to get token
  async getToken(){
    return localStorage.getItem("token");
  }

}
