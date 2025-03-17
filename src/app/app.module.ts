import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Ensure this path is correct
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // Ensure this path is correct
import { LoginComponent } from 'login/login.component';
import { StudentRegistrationComponent } from 'student-registration/student-registration.component';
import { AssignStudentComponent } from 'assign-student/assign-student.component';
import { ClassManagementComponent } from 'class-management/class-management.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent, // Ensure this is declared
    PageNotFoundComponent // Ensure this is declared
    LoginComponent,
    StudentRegistrationComponent,
    AssignStudentComponent,
    ClassManagementComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Add ReactiveFormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }