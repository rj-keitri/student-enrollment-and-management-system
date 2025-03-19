// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';



// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, FormsModule], // Include FormsModule here
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';  // Declare username property
//   password: string = '';  // Declare password property
//   message: string = '';   // Declare message property

//   constructor(private http: HttpClient) {}

//   // Method for handling the login
//   login() {
//     this.http.post<any>('http://localhost:3000/api/login', {
//       username: this.username,
//       password: this.password
//     }).subscribe(
//       response => {
//         this.message = response.message; // On success
//       },
//       error => {
//         this.message = error.error.message; // On error
//       }
//     );
//   }
// }


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  isFormValid = false;

  constructor(private http: HttpClient) {}

  // Method to validate input fields
  validateInputs(): void {
    this.isFormValid =
      this.username.trim() !== '' && this.password.trim() !== '';
  }

  // Method for handling the login process
  login() {
    if (!this.isFormValid) {
      this.message = 'Please fill in all fields!';
      return;
    }

    this.http
      .post<any>('http://localhost:3000/api/login', {
        username: this.username,
        password: this.password,
      })
      .subscribe(
        (response) => {
          this.message = response.message; // Successful login
        },
        (error) => {
          this.message = error.error.message; // Login error
        }
      );
  }
}
