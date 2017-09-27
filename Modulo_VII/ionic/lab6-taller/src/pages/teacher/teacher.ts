import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Teacher } from '../../models/teacher'

@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html'
})
export class TeacherPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    titleTeacher = 'Teachers:';
    idTeahcer: number;
    selectedTeacher: Teacher;
    teachers: Teacher[] = TEACHERS;
  
    onSelectTeacher() {
      this.selectedTeacher = this.teachers.find(x => x.id == this.idTeahcer);
    }
  
  }
  
  const TEACHERS: Teacher[] = [
    {
      id: 435432534,
      name: 'Juan',
      lastname: 'Castiblanco',
      age: 43,
      profession: 'Matematico',
      grades: [9, 10, 11],
      groups: ['9A', '10A', '11B']
    },
    {
      id: 84334665524,
      name: 'Profesor',
      lastname: 'Chiflado',
      age: 43,
      profession: 'Quimico',
      grades: [5, 6, 8],
      groups: ['5A', '6A', '8B', '8C']
    },
    {
      id: 57451344222,
      name: 'Ana',
      lastname: 'Conrrado',
      age: 43,
      profession: 'Fisico',
      grades: [7, 8],
      groups: ['7A', '7B', '8A', '8B', '8C']
    }
  ] 