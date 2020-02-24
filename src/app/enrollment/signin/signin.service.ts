import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInModel } from './signin.model';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  signIn(signInModel: SignInModel) {
    return this.http.post('https://reqres.in/api/register', {
      email: signInModel.email,
      password: signInModel.password
    });
  }
}
