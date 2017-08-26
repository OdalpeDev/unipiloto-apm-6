import { Component } from '@angular/core';
import { Student } from '../section/student/student.component';
import { Teacher } from '../section/Teacher/teacher.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Students:';
  selectedStudent: Student;
  students: Student[] = STUDENTS;

  onSelectStudent(student: Student) {
    this.selectedStudent = student;
  }

  title2 = 'Teacher:';
  selectedTeachert: Teacher;
  teachers: Teacher[] = TEACHER;
  
  onSelectTeacher(teacher: Teacher) {
    this.selectedTeachert = teacher;
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


const TEACHER: Teacher[] = [
  {
    id: 876453345,
    name: "Juan",
    lastname: "Primero",
    age: 16,
    profession: "Quimico",
    grades: [9, 10, 11],
    groups: ["11A", "9B"]
  },
  {
    id: 124477832,
    name: "Ana",
    lastname: "Arevalo",
    age: 16,
    profession: "Fisico",
    grades: [5,6,7],
    groups: ["5A", "6B"]
  },
  {
    id: 874575684,
    name: "Pedro",
    lastname: "Sierra",
    age: 16,
    profession: "Matematico",
    grades: [7, 8],
    groups: ["7A","8B"]
  }];
