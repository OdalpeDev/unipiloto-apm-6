import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeacherDetailComponent } from '../section/teacher.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
