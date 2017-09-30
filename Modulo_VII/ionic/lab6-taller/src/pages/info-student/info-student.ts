import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Student } from '../../models/student';

@Component({
  selector: 'page-info-student',
  templateUrl: 'info-student.html',
})
export class InfoStudentPage {

  public infoStudent: Student;

  constructor(public viewCtrl: ViewController, public nav: NavParams) {
    this.infoStudent = nav.get('student');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
