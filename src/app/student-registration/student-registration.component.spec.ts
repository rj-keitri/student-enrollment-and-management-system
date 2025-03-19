import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  standalone: true,
  imports: [] // Add required modules like ReactiveFormsModule if this is standalone
})
export class StudentRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required], // Name field with required validator
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')]], // Password validation
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]] // Age validation (optional: set range)
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
      // Add logic here to handle form submission
    } else {
      console.log('Form is invalid!');
    }
  }
}
