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
    // Fixed FormGroup with correct syntax and no duplicate password field
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      suffix: [''],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')]],
      grade: ['', Validators.required],
      section: ['', Validators.required],
      studentNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]] // Ensure it's numeric
    });
  }

  ngOnInit(): void {
    console.log('Student Registration Component Loaded'); // Debug log
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Handle form submission logic
    } else {
      console.log('Form is invalid');
    }
  }
}
