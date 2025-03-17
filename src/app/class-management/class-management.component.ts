import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives

@Component({
  selector: 'app-class-management',
  templateUrl: './class-management.component.html',
  styleUrls: ['./class-management.component.css'], // Corrected to styleUrls
  standalone: true,
  imports: [CommonModule] // Include CommonModule for directives like *ngIf, *ngFor, etc.
})
export class ClassManagementComponent {
  // You can add properties and methods here as needed
}