import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoStudentPage } from './info-student';

@NgModule({
  declarations: [
    InfoStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoStudentPage),
  ],
})
export class InfoStudentPageModule {}
