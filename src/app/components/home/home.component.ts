import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllEventsService } from 'src/app/services/get-all-events.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  msg: string = '';
  eventData:any;
  specificEventId:any;

  constructor(public GetAllEventsService:GetAllEventsService,
    public router:Router) { }

  ngOnInit(): void {
    this.GetAllEventsService.getAllEvents()
    .subscribe((data: any) => {
      console.log(data);
      this.eventData = data;
    });
  }

  getEvent(eventId: any){
    localStorage.setItem("eventId", eventId);
    this.router.navigate(['/viewevent']);
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



