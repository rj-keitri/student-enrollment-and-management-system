import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component"; // Import RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] // Include any necessary modules here
 // Include any necessary modules here
})
export class AppComponent {
  title = 'student-enrollment-and-management-system';
}