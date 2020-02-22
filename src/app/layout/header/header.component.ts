import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userActive = false;
  user: string;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.userActive = true;
      this.user = localStorage.getItem('user');
    }
  }
  logout():void{
    console.log('logout')
  }

}
