import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Student } from '../../models/student';
import { InfoStudentPage } from '../info-student/info-student';
import { AddStudentPage } from '../add-student/add-student';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-student',
  templateUrl: 'student.html'
})
export class StudentPage {
  _student: Student; // = {id: 1, age: 0, name: '', lastname: '', grade: 0, group: '', classes: ['']};
  students: Student[] = new Array(); //=[this._student];

  constructor(public navCtrl: NavController, private storage: Storage, public modalCtrl: ModalController) {
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
          this.students = JSON.parse(result);
        }
        console.log(this.students);
      })
      .catch(error => console.error('Se presentó error consultando los estudiantes.' + error));
  }

  studentSelected(_student: Student) {
    let profileModal = this.modalCtrl.create(InfoStudentPage, { student: JSON.stringify(_student) });
    profileModal.present();
  }

  AddStudent() {
    let profileModal = this.modalCtrl.create(AddStudentPage);
    profileModal.present();
  }
}

