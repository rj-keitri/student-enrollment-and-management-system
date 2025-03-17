import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AssignStudentComponent } from './assign-student/assign-student.component';
import { ClassManagementComponent } from './class-management/class-management.component';

const routes: Routes = [
  // { path: 'login' , component: LoginComponent },
  // { path: 'register' , component: StudentRegistrationComponent },
  // { path: 'assign-student', component: AssignStudentComponent },
  // { path: 'class-management', component: ClassManagementComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path: '', component: HomeComponent }
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
