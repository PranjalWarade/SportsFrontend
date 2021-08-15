import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetEventService } from 'src/app/services/get-event.service';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css'],
  providers: [GetEventService]
})

export class VieweventComponent implements OnInit {

  eventId:any;
  eventData:any;
  msg:string = '';

  constructor(public GetEventService:GetEventService,
    public router:Router) { }

  ngOnInit(): void {
    this.eventId = localStorage.getItem("eventId");
    this.GetEventService.getEventData(this.eventId)
    .subscribe((data: any) => {
      this.eventData = data;
      console.log(data);
    });
  }

  registerEvent(){
    if(localStorage.getItem("isLoggedIn") == "true"){
      this.router.navigate(['/registerevent']);
    } else {
      this.msg = "Please login to participate in event!!";
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 5000);
    }
  }

}
