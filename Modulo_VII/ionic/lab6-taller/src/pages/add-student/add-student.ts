import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import {Student} from '../../models/student';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {

  public datosStudent: Student;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private storage: Storage ) {
  }

  saveDataStudent(){

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
