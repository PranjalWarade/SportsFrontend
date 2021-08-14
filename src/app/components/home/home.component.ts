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
    this.router.navigate(['/viewevent']);
  }

}



