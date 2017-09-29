import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import {Student} from '../../models/student';

@IonicPage()
@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {

  myForm: FormGroup;
  students: string;
  listStudent: Student[];

  constructor( public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public formBuilder: FormBuilder) {
    this.myForm = this.createForm();
  }

  private createForm() {
    return this.formBuilder.group({
      id: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      firt_name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      last_name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      age: ['', Validators.required],
      classes: ['', Validators.required],
      grade: ['', Validators.required],
      group: ['', Validators.required]
    });
  }

  //
  saveDataStudent() {

    this.storage.get('Students')
      .then(result => {
        if (result == null) {
          this.students = '['+ JSON.stringify(this.myForm.value)+']';
          this.listStudent =  JSON.parse(this.students);
        }
        else {
          this.listStudent = JSON.parse(result);
          this.listStudent.push(this.myForm.value);
        }

        this.storage.set('Students',JSON.stringify(this.listStudent) );
        this.myForm.reset();

      })
      .catch(error => console.error('Se presentó guardando datos del estudiante.' + error));
  }

  //
  CancelarAdd(){
      this.navCtrl.pop();
    }
  

}
