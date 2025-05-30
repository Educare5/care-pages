import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SheetService } from '../../services/sheet.service';

@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
  userForm!: FormGroup;
  showCareerForm = false;
  showLoader = false;

  url: string = 'https://api.sheetbest.com/sheets/e728da53-6d73-451b-9339-8863d0e833ff';

  constructor(private service: SheetService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const currentPage = this.activatedRoute.snapshot.url.join('/');
    if (currentPage.includes('form')) {
      this.showCareerForm = false;
    } else {
      this.showCareerForm = true;
    }
    this.renderForm();
  }

  renderForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      currentLocation: new FormControl(''), // Optional
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      email: new FormControl('', [Validators.email]), // Optional
    })
    this.updateFormControls();
  }

  updateFormControls() {
    if (this.showCareerForm) {
      this.userForm.addControl('subject', new FormControl('', Validators.required));
      this.userForm.removeControl('standard');
    } else {
      this.userForm.addControl('standard', new FormControl('', Validators.required));
      this.userForm.removeControl('subject');
    }
  }

  submitForm() {
    this.showLoader = true;
    if (this.userForm.valid) {
      const name = this.userForm.value.name;
      const currentLocation = this.userForm.value.currentLocation;
      const standard = this.userForm.value.standard;
      const phoneNumber = this.userForm.value.phoneNumber;
      const email = this.userForm.value.email;
      const subject = this.userForm.value.subject;
      this.service.createSheet(name, currentLocation, standard, phoneNumber, email, subject).subscribe({
        next: (res) => {
          console.log(res);
          this.showLoader = false;
        },
        error: (err) => {
          console.error(err);
          this.showLoader = false;
        }
      })
      this.userForm.reset();
    } else {
      console.log("Form is invalid!", this.userForm.errors);
    }
  }
}
