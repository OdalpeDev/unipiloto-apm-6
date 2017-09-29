import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Teacher } from '../../models/teacher';

@IonicPage()
@Component({
  selector: 'page-add-teacher',
  templateUrl: 'add-teacher.html',
})
export class AddTeacherPage {

  myForm: FormGroup;
  teachers: string;
  listTeacher: Teacher[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public formBuilder: FormBuilder) {
    this.myForm = this.createForm();
  }

  private createForm() {
    return this.formBuilder.group({
      id: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      firt_name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      last_name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      age: ['', Validators.required],
      profession: ['', Validators.required],
      grades: ['', Validators.required],
      groups: ['', Validators.required]
    });
  }

  //
  saveDataTeacher() {

    this.storage.get('Teachers')
      .then(result => {
        if (result == null) {
          this.teachers = '[' + JSON.stringify(this.myForm.value) + ']';
          this.listTeacher = JSON.parse(this.teachers);
        }
        else {
          this.listTeacher = JSON.parse(result);
          this.listTeacher.push(this.myForm.value);
        }

        this.storage.set('Teachers', JSON.stringify(this.listTeacher));
        this.myForm.reset();

      })
      .catch(error => console.error('Se presentó guardando datos del profesor.' + error));
  }

  //
  CancelarAdd() {
    this.navCtrl.pop();
  }


}
