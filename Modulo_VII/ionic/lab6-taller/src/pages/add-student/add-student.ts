import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import {Student} from '../../models/student';

@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {

  myForm: FormGroup;
  students: string;
  listStudent: Student[];

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private storage: Storage, public formBuilder: FormBuilder) {
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

  saveDataStudent() {

    this.storage.get('Students')
      .then(result => {
        if (result == null) {
          this.students = '['+ JSON.stringify(this.myForm.value)+']';
          this.listStudent =  JSON.parse(this.students);
          console.log('1 = ' + this.students);
          console.log('1 = ' + JSON.stringify(this.listStudent));
        }
        else {
          console.log('reg - 1');
          this.listStudent = JSON.parse(result);
          console.log('reg -2');
          this.listStudent.push(this.myForm.value);
          console.log('2 = ' + JSON.stringify(this.listStudent));
        }

        this.storage.set('Students',JSON.stringify(this.listStudent) );
        console.log('registrado');
      })
      .catch(error => console.error('Se presentó guardando datos del estudiante.' + error));
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
