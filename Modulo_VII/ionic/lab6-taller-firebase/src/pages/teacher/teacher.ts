import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Teacher } from '../../models/teacher'
import { InfoTeacherPage } from '../info-teacher/info-teacher';
import { AddTeacherPage } from '../add-teacher/add-teacher';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html'
})
export class TeacherPage {
  _teacher: Teacher;
  teachers: Teacher[] = new Array(); 

  constructor(public navCtrl: NavController, private storage: Storage, public modalCtrl: ModalController) {
   this.mostrarTeachers();
  }

  mostrarTeachers() {
    //this.storage.remove('Teachers');
    this.storage.get('Teachers')
      .then(result => {
        if (result != null) {
          this.teachers = JSON.parse(result);
        }
        console.log(this.teachers);
      })
      .catch(error => console.error('Se presentó error consultando los estudiantes.' + error));
  }

  teacherSelected(_teacher: Teacher) {
    let profileModal = this.modalCtrl.create(InfoTeacherPage, { teacher: JSON.stringify(_teacher) });
    profileModal.present();
  }

  AddTeacher() {
    let profileModal = this.modalCtrl.create(AddTeacherPage);
    profileModal.present();
  }
}