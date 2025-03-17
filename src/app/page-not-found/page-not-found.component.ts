import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'], // Corrected to styleUrls
  standalone: true,
  imports: [CommonModule] // Include CommonModule for directives
})
export class PageNotFoundComponent {
  // You can add properties and methods here as needed
}