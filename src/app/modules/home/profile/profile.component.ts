import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ProfileModel } from './profile.model';
import { FormBuilder, FormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent implements OnInit {
  profileUpdate: ProfileModel[] = [];
  formSubmitted = false;
  profileUpdateSuccess = false;

  profileModel: ProfileModel = new ProfileModel();
  profileUpdateForm = this.fb.group({
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
    qualification: ['', Validators.required],
    referralCode: ['', Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
  }
 
  onSubmit(): void{

  }

  onReset(): void{

  }
  confirmPasswordMatching(event: any): void{

  }
}
