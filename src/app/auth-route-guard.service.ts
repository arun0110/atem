import { Injectable } from '@angular/core';
import { LoginService } from './enrollment/login/login.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuardService implements CanActivate{

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  canActivate(): boolean{
    if(!this.loginService.isLogged()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
