import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  activeUser: string;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.activeUser = localStorage.getItem('user');
    }
  }

}
