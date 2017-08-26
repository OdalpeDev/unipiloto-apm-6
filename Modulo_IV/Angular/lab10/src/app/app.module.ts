import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentDetailComponent } from '../section/student/student.component';
import { TeacherDetailComponent } from '../section/teacher/teacher.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherDetailComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
