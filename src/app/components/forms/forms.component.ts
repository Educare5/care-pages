import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
  userForm!: FormGroup;

  ngOnInit(): void {
    this.renderForm();
  }

  renderForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      currentLocation: new FormControl(''), // Optional
      standard: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      email: new FormControl('', [Validators.email]) // Optional
    })
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log("Form is invalid!");
    }
  }
}
