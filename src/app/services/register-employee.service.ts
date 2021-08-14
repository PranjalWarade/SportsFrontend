import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterEmployeeService {
  private baseUrl= "http://localhost:9000";

  makes: any[] = [];

  constructor(private http: HttpClient) {
    this.makes = [];
  }

  registerUser(user:User): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    //const
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post(`${this.baseUrl}/employee/signup` + '', body,{'headers':headers})
  }


}
