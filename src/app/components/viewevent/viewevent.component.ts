import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})

export class VieweventComponent implements OnInit {

  eventData:any;

  constructor() { }

  ngOnInit(): void {

  }

  public getEvent(eventId: any){
    console.log(eventId);

  }

}
