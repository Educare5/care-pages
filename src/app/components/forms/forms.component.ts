import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
  userForm!: FormGroup;
  showCareerForm = false;

  url: string = 'https://script.google.com/macros/s/AKfycbzQwQ0UOlmT9rvJysaeE27LNFciFTDjIwFmA_1pjHSgDeuY62Lkny_K_I2OA0Zcijpn5w/exec';

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.showCareerForm = params['page'] === 'career'
    })
    this.renderForm();
  }



  renderForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      currentLocation: new FormControl(''), // Optional
      standard: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      email: new FormControl('', [Validators.email]), // Optional
      subject: new FormControl('')
      // 
    })
  }

  submitForm() {
    if (this.userForm.valid) {

      this.http.post(this.url, this.userForm.value);
      console.log(this.userForm.value);
    } else {
      console.log("Form is invalid!");
    }
  }
}
