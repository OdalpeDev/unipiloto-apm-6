import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { DriversComponent } from './drivers/drivers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StudentDetailComponent } from './details/detstudent/detstudent.component';
import { DetteacherComponent } from './details/detteacher/detteacher.component';
import { DetvehiclesComponent } from './details/detvehicles/detvehicles.component';
import { DetdriverComponent } from './details/detdriver/detdriver.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeachersComponent,
    StudentsComponent,
    DriversComponent,
    VehiclesComponent,
    StudentDetailComponent,
    DetteacherComponent,
    DetvehiclesComponent,
    DetdriverComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
