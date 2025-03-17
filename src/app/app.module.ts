import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HomeComponent } from './home/home.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import { LoginComponent } from './login/login.component'; 
import { StudentRegistrationComponent } from './student-registration/student-registration.component'; 
import { AssignStudentComponent } from './assign-student/assign-student.component'; 
import { ClassManagementComponent } from './class-management/class-management.component'; 

@NgModule({
declarations: [
  AppComponent,
  HomeComponent,
  PageNotFoundComponent,
  LoginComponent,
  StudentRegistrationComponent,
  AssignStudentComponent,
  ClassManagementComponent
],


  imports: [
    BrowserModule,
    AppRoutingModule // Ensure this is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }