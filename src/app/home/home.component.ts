import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule if needed

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrected to styleUrls
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule] // Include CommonModule and ReactiveFormsModule for directives and forms
})
export class HomeComponent {
  // Define properties
  title: string = 'Welcome to the Home Component';

  // Define methods
  constructor() {}

  greet() {
    console.log('Hello from HomeComponent!');
  }
}