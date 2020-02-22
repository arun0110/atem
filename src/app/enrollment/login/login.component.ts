import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formSubmitted = false;
  loginSuccess = false;
  loginForm = this.fb.group({
    username: ['',[Validators.required]],
    password: ['',[Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if(this.loginForm.value.username === 'admin' &&
    this.loginForm.value.password === 'Admin@1234'){
      this.loginSuccess = true;
      this.router.navigate(['home'])
      localStorage.setItem('user', 'Admin');
    }else{
      this.loginSuccess = false;
    }
  }

}
