import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Student } from '../../models/student';
import {InfoStudentPage} from '../info-student/info-student';
import {AddStudentPage} from '../add-student/add-student';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-student',
  templateUrl: 'student.html'
})
export class StudentPage {

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
    profileModal.present();
  }
}

