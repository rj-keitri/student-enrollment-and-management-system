import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  standalone: true,
})
export class StudentRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.password]],
      age: ['', Validators.required],
    });
  }

  onSubmit() {
    // Handle registration logic here
    console.log(this.registrationForm.value);
  }
}