import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    return this.http.post('https://reqres.in/api/login', {
      email,
      password
    });
  }

  isLogged(): boolean{
    return localStorage.getItem('token')!==null;
  }
}
