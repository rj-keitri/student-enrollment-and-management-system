import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Adjust the path as necessary
import { LoginComponent } from './login/login.component'; // Adjust the path as necessary
import { StudentRegistrationComponent } from './student-registration/student-registration.component'; // Adjust the path as necessary
import { AssignStudentComponent } from './assign-student/assign-student.component'; // Adjust the path as necessary
import { ClassManagementComponent } from './class-management/class-management.component'; // Adjust the path as necessary
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // Adjust the path as necessary

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login on empty path
  { path: 'login', component: LoginComponent }, // Route for LoginComponent
  { path: 'home', component: HomeComponent }, // Route for HomeComponent
  { path: 'register', component: StudentRegistrationComponent }, // Route for StudentRegistrationComponent
  { path: 'assign-student', component: AssignStudentComponent }, // Route for AssignStudentComponent
  { path: 'class-management', component: ClassManagementComponent }, // Route for ClassManagementComponent
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import the RouterModule with the defined routes
  exports: [RouterModule] // Export RouterModule so it can be used in other modules
})
export class AppRoutingModule { }