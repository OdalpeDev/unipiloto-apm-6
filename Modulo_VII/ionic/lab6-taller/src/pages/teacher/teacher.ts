import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Teacher } from '../../models/teacher';
import { InfoTeacherPage } from '../info-teacher/info-teacher';
import { AddTeacherPage } from '../add-teacher/add-teacher';
import { Storage } from '@ionic/storage';
import {TeacherServiceProvider} from '../../providers/teacher-service/teacher-service';


@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html'
})
export class TeacherPage {

  constructor(public navCtrl: NavController, private storage: Storage, public modalCtrl: ModalController, private listTeacher: TeacherServiceProvider) {
   this.mostrarTeachers();
  }

  mostrarTeachers() {
   // this.storage.remove('Teachers');
    this.storage.get('Teachers')
      .then(result => {
        if (result != null) {
          this.listTeacher.listTachers = JSON.parse(result);
        }
        console.log('mostrar -> ' + this.listTeacher.listTachers);
      })
      .catch(error => console.error('Se presentó error consultando los estudiantes.' + error));
  }

  teacherSelected(_teacher: Teacher) {
    let profileModal = this.modalCtrl.create(InfoTeacherPage, { teacher: _teacher });
    profileModal.present();
  }

  AddTeacher() {
    let profileModal = this.modalCtrl.create(AddTeacherPage);
    profileModal.present();
  }
}