import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  titleStudent = 'Students:';
  idStudent: number;
  selectedStudent: Student;
  students: Student[] = STUDENTS;
    
  onSelectStudent() {
    console.log( this.idStudent);
    this.selectedStudent = STUDENTS.find(x => x.id == this.idStudent);
    console.log( this.selectedStudent.name);
  }
}

const STUDENTS: Student[] = [
  {
    id: 222,
    name: "Pedro",
    lastname: "Segundo",
    age: 16,
    classes: ["Quimica", "Fisica"],
    grade: 11,
    group: "11A"
  },
  {
    id: 111,
    name: "Catalina",
    lastname: "Alvarez",
    age: 23,
    classes: ["Matematicas", "Fisica"],
    grade: 9,
    group: "9A"
  },
  {
    id: 333,
    name: "Pablo",
    lastname: "Tercero",
    age: 11,
    classes: ["Matematicas", "Fisica", "Sociales"],
    grade: 8,
    group: "8B"
  }];

