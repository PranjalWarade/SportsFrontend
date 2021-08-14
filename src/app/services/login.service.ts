import { HttpClient } from '@angular/common/http';
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
    const headers = { 'content-type': 'application/json' }
    const body=JSON.stringify(credentials);
    return this.http.post(`${this.baseUrl}/employee/login`, body, {'headers':headers});
  }

  //for login User
  async saveToken(token: string){
    localStorage.setItem("token", token);
    console.log("Saved token - " + localStorage.getItem("token"));
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
