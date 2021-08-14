import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontend';
  isLoggedIn = false;
  username?: string;
  constructor() { }

  ngOnInit(): void {

  }

  logout(): void {

  }
}
