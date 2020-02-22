import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  passwordMatched: boolean;
  forgotPasswordForm = this.fb.group({
    userName: ['', [Validators.required,
      Validators.minLength(1),
      Validators.maxLength(30)]],
    secretQuestion: ['', Validators.required],
    secretAnswer: ['', [Validators.required,
      Validators.minLength(1),
      Validators.maxLength(30)]],
    qualification: ['', Validators.required],
    password: ['', [Validators.required,
    Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/),
    Validators.minLength(8),
    Validators.maxLength(20)]],
    confirmPassword: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.forgotPasswordForm);
  }
  onReset(): void {
    console.log('reset')
    this.forgotPasswordForm.markAsPristine();
    this.forgotPasswordForm.markAsTouched();
    this.forgotPasswordForm.reset();
  }
  confirmPasswordMatching(confirmPassword): void {
      this.passwordMatched = confirmPassword === this.forgotPasswordForm.value.password;
  }
}
