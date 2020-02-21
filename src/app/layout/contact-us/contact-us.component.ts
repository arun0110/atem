import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
    comment: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.contactUsForm);
  }

  onSubmit(): void{
    console.log(this.contactUsForm.value);
  }
}
