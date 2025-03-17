import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  standalone: true
})
export class StudentRegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    // Any additional initialization logic
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Handle form submission
    }
  }
}