import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  passwordMatched: boolean;

  signInForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobile: ['', [Validators.required,
    Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10)]],
    email: ['', [Validators.required,
    Validators.email,
    Validators.minLength(10),
    Validators.maxLength(30)]],
    secretQuestion: ['', Validators.required],
    secretAnswer: ['', [Validators.required,
      Validators.minLength(1),
      Validators.maxLength(30)]],
    qualification: ['', Validators.required],
    userName: ['', [Validators.required,
      Validators.minLength(1),
      Validators.maxLength(30)]],
    password: ['', [Validators.required,
    Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/),
    Validators.minLength(8),
    Validators.maxLength(20)]],
    confirmPassword: ['', [Validators.required]],
    referralCode: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.signInForm);
  }
  onReset(): void {
    console.log('reset')
    this.signInForm.markAsPristine();
    this.signInForm.markAsTouched();
    this.signInForm.reset();
  }
  confirmPasswordMatching(confirmPassword): void {
      this.passwordMatched = confirmPassword === this.signInForm.value.password;
  }
}
