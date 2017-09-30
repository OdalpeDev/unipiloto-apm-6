import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Student } from '../../models/student';
import { InfoStudentPage } from '../info-student/info-student';
import { AddStudentPage } from '../add-student/add-student';
import { Storage } from '@ionic/storage';
import { StudentServiceProvider } from '../../providers/student-service/student-service';

@Component({
  selector: 'page-student',
  templateUrl: 'student.html'
})
export class StudentPage {
  _student: Student; 

  constructor(public navCtrl: NavController, private storage: Storage, public modalCtrl: ModalController, private listStudent: StudentServiceProvider) {
    console.log('constructor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
    this.mostrarStudents();
  }

  mostrarStudents() {
    //this.storage.remove('Students');
    this.storage.get('Students')
      .then(result => {
        if (result != null) {
         this.listStudent.listStudents = JSON.parse(result);
        }
      })
      .catch(error => console.error('Se presentó error consultando los estudiantes.' + error));
  }

  studentSelected(_student: Student) {
    let profileModal = this.modalCtrl.create(InfoStudentPage, { student: _student });
    profileModal.present();
  }

  AddStudent() {
    let profileModal = this.modalCtrl.create(AddStudentPage);
    profileModal.present();
  }
}

