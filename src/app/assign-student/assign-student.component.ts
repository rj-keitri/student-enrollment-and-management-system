import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives

@Component({
  selector: 'app-assign-student',
  templateUrl: './assign-student.component.html',
  styleUrls: ['./assign-student.component.css'], // Corrected to styleUrls
  standalone: true,
  imports: [CommonModule] // Include CommonModule for directives like *ngIf, *ngFor, etc.
})
export class AssignStudentComponent {
  // You can add properties and methods here as needed
}