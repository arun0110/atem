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
    email: ['', [Validators.required, Validators.email]],
    comment: ['', [Validators.required, Validators.maxLength(500)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.contactUsForm);
  }

  onSubmit(): void{
    console.log(this.contactUsForm.value);
  }
}
