import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Teacher } from '../../models/teacher';

@Component({
  selector: 'page-info-teacher',
  templateUrl: 'info-teacher.html',
})
export class InfoTeacherPage {

  public infoTeacher: Teacher;
  
    constructor(public viewCtrl: ViewController, public nav: NavParams) {
      this.infoTeacher = nav.get('teacher');
    } 
  
    dismiss() {
      this.viewCtrl.dismiss();
    }
  
  }