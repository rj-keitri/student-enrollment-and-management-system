
import { RouterModule, Routes } from '@angular/router';


// Component Imports
import { HomeComponent } from './home/home.component'; 
import { LoginComponent } from './login/login.component'; 
import { StudentRegistrationComponent } from './student-registration/student-registration.component'; 
import { AssignStudentComponent } from './assign-student/assign-student.component'; 
import { ClassManagementComponent } from './class-management/class-management.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to home
  { path: '', component: HomeComponent }, // Serve HomeComponent on root ('')
  { path: 'home', component: HomeComponent }, // Exact match for home
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'student-registration', component: StudentRegistrationComponent }, // Exact match for student registration
  { path: 'assign-student', component: AssignStudentComponent }, // Exact match for assign student
  { path: 'class-management', component: ClassManagementComponent }, // Exact match for class management
  { path: '**', component: PageNotFoundComponent } // Wildcard for undefined routes
];

