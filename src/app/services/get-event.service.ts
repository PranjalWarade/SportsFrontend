import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetEventService {

  private baseUrl = "http://localhost:9000"
  constructor(private http : HttpClient) {}

  public getEventData(eventId: any){
    return this.http.get(`${this.baseUrl}/event/find/` + eventId);
  }
}
