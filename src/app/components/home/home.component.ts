import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  msg: string = '';
  router: any;

  constructor() { }

  ngOnInit(): void {

  }
  clickEvent() {
    this.msg = 'Please Login to Register for the Event';
    return this.msg;
  }
  clickEventDetails() {
    return;
  }
}



