import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'], // Ensure you have this if you have styles
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule] // Include necessary modules here
})
export class StudentRegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      // name: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      suffix: [''],
      email: ['', [Validators.required, Validators.email]], // Email field added
      grade: ['', Validators.required],
      section: ['', Validators.required],
      studentNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]] // Ensure it's numeric
    });
  }

  ngOnInit(): void {
    // Any additional initialization logic
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Handle form submission, e.g., send data to a server
    } else {
      console.log('Form is invalid');
    }
  }
}