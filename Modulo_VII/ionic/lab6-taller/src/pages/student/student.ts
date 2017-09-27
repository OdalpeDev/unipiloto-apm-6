import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Student } from '../../models/student';
<<<<<<< HEAD
import { InfoStudentPage } from '../info-student/info-student';
import { AddStudentPage } from '../add-student/add-student';
=======
import {InfoStudentPage} from '../info-student/info-student';
import {AddStudentPage} from '../add-student/add-student';
>>>>>>> 5eb32bd30da281b631bee70529b01a59e8694233
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-student',
  templateUrl: 'student.html'
})
export class StudentPage {
<<<<<<< HEAD
  _student: Student; // = {id: 1, age: 0, name: '', lastname: '', grade: 0, group: '', classes: ['']};
  students: Student[] = new Array(); //=[this._student];

  constructor(public navCtrl: NavController, private storage: Storage, public modalCtrl: ModalController) {
    console.log('Consultando estudiantes...');
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

  studentSelected(student: Student) {
    let profileModal = this.modalCtrl.create(InfoStudentPage, { student: Student });
    profileModal.present();
  }

  AddStudent() {
    let profileModal = this.modalCtrl.create(AddStudentPage);
=======

  students: Student[];

  constructor(public navCtrl: NavController, private storage: Storage, public modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.mostrarStudents();
  }

  mostrarStudents(){
    this.storage.get('Students')
    .then(result => 
      this.students = result)
  	.catch(error => console.error(error));
  }

  studentSelected(student: Student) {
    let profileModal = this.modalCtrl.create(AddStudentPage, { student: Student });
>>>>>>> 5eb32bd30da281b631bee70529b01a59e8694233
    profileModal.present();
  }
}

