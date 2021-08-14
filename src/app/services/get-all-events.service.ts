import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllEventsService {

  private baseUrl = "http://localhost:9000"
  constructor(private http : HttpClient) {}

  public getAllEvents(){
    return this.http.get(`${this.baseUrl}/event/all`);
  }

}
