import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule] // Include any necessary modules here
})
export class AppComponent {
  title = 'student-enrollment-and-management-system';
}