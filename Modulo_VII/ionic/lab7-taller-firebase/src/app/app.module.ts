import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import {IonicStorageModule} from "@ionic/storage";

import { MyApp } from './app.component';
import { StudentPage } from '../pages/student/student';
import { TeacherPage} from '../pages/teacher/teacher';
import {InfoStudentPage} from '../pages/info-student/info-student';
import {AddStudentPage} from '../pages/add-student/add-student';
import {InfoTeacherPage} from '../pages/info-teacher/info-teacher';
import {AddTeacherPage} from '../pages/add-teacher/add-teacher';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StudentServiceProvider } from '../providers/student-service/student-service';
import { TeacherServiceProvider } from '../providers/teacher-service/teacher-service';

@NgModule({
  declarations: [
    MyApp,
    StudentPage,
    TeacherPage,
    InfoStudentPage,
    InfoTeacherPage,
    AddStudentPage,
    AddTeacherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name:'_my_from_db',
      driverOrder:['websql', 'indexeddb', 'sqlite']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StudentPage,
    TeacherPage,
    InfoStudentPage,
    InfoTeacherPage,
    AddStudentPage,
    AddTeacherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentServiceProvider,
    TeacherServiceProvider
  ]
})
export class AppModule {}
