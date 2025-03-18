import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component'; // Import your main app component
import { HomeComponent } from './home/home.component'; // Adjust the path as necessary
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

@NgModule({

  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Include the routing module
    StudentRegistrationComponent // Import StudentRegistrationComponent directly
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy } // Provide HashLocationStrategy
  ],
})
export class AppModule { }