import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {

  userName: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('name');
  }
  
  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.router.navigate(['welcome']);
  }
}
