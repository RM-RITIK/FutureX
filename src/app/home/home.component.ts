import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor()  { }

  ngOnInit() {
  }
  city() {
    alert("this service is not available right now!")
  }
  

}
