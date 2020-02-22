import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators } from '@angular/forms';
import { SignInModel } from './signin.model';
import { RegistrationTable } from 'src/app/common/registration-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  registeredMembers: SignInModel[] = [];
  passwordMatched: boolean;
  formSubmitted = false;
  signInSuccess = false;

  signInModel: SignInModel = new SignInModel();
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
  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.formSubmitted = true;
    this.formToModelMapping();
    if(this.registeredMembers.length != 0){
      this.registeredMembers.forEach(member =>{
        if(member.email === this.signInModel.email || member.userName === this.signInModel.userName){
          this.signInSuccess = false;
        }
      });
      if(!this.signInSuccess){
        this.registeredMembers.push(this.signInModel);
        this.signInSuccess = true;
        setTimeout(()=>{
          this.router.navigate(['login'])
        },5000);
      }
    }else{
      this.registeredMembers.push(this.signInModel);
      this.signInSuccess = true;
      setTimeout(()=>{
        this.router.navigate(['login'])
      },5000);
    }
    
    console.log(this.formSubmitted, this.signInSuccess);
    console.log(this.registeredMembers);
  }


  formToModelMapping(): void{
    this.signInModel.firstName = this.signInForm.value.firstName;
    this.signInModel.lastName = this.signInForm.value.lastName;
    this.signInModel.mobile = this.signInForm.value.mobile;
    this.signInModel.email = this.signInForm.value.email;
    this.signInModel.secretQuestion = this.signInForm.value.secretQuestion;
    this.signInModel.secretAnswer = this.signInForm.value.secretAnswer;
    this.signInModel.qualification = this.signInForm.value.qualification;
    this.signInModel.password = this.signInForm.value.password;
    this.signInModel.userName = this.signInForm.value.userName;
    this.signInModel.referralCode = this.signInForm.value.referralCode;
  }

  onReset(): void {
    this.signInForm.markAsPristine();
    this.signInForm.markAsTouched();
    this.signInForm.reset();
  }
  confirmPasswordMatching(confirmPassword): void {
      this.passwordMatched = confirmPassword === this.signInForm.value.password;
  }
}
