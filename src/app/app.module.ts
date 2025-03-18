import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AppComponent } from './app.component'; // Import your main app component
import { HomeComponent } from './home/home.component'; // Adjust the path as necessary

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule // Include the routing module
  ],
  providers: [],
})
export class AppModule { }