import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { HomeComponent } from './home/home.component'; 
import { StudentRegistrationComponent } from './student-registration/student-registration.component'; 
import { AssignStudentComponent } from './assign-student/assign-student.component'; 
import { ClassManagementComponent } from './class-management/class-management.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'student-registration', component: StudentRegistrationComponent }, 
  { path: 'assign-student', component: AssignStudentComponent }, 
  { path: 'class-management', component: ClassManagementComponent }, 
  { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }