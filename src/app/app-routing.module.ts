import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Imports
import { LoginComponent } from './login/login.component'; 
import { HomeComponent } from './home/home.component'; 
import { StudentRegistrationComponent } from './student-registration/student-registration.component'; 
import { AssignStudentComponent } from './assign-student/assign-student.component'; 
import { ClassManagementComponent } from './class-management/class-management.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to home
  { path: 'home', component: HomeComponent }, // Exact match for home
  { path: 'login', component: LoginComponent }, // Exact match for login
  { path: 'student-registration', component: StudentRegistrationComponent }, // Exact match for student registration
  { path: 'assign-student', component: AssignStudentComponent }, // Exact match for assign student
  { path: 'class-management', component: ClassManagementComponent }, // Exact match for class management
  { path: '**', component: PageNotFoundComponent } // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }

// Export the routes for use in main.ts
export { routes };