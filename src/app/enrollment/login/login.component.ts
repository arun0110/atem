import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formSubmitted = false;
  loginSuccess = false;
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe( (res: any) => {
      this.formSubmitted = true;
      this.loginSuccess = true;
      localStorage.setItem('token', res.token);
      let email = this.loginForm.value.username;
      let emailSplit = email.split('@');
      let nameSplit = emailSplit[0].split('.');
      localStorage.setItem('name', nameSplit[0] + ' ' + nameSplit[1]);
      this.router.navigate(['home'])
      
      console.log(res);
    },
    err =>{
      this.formSubmitted = true;
      this.loginSuccess = false;
      console.log(err);
    })
    // if(this.loginForm.value.username === 'admin' &&
    // this.loginForm.value.password === 'Admin@1234'){
    //   this.loginSuccess = true;
    //   this.router.navigate(['home'])
    //   localStorage.setItem('user', 'Admin');
    // }else{
    //   this.loginSuccess = false;
    // }
  }

}
