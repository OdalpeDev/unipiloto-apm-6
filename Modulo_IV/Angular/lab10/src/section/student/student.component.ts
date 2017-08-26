import { Component, Input } from '@angular/core';
import { Person } from '../../models/person';

export class Student extends Person {
  classes: Array<string>;
  grade: number;
  group: string;

  constructor(id: number, age: number, name: string, lastname: string, classes: Array<string>, grade: number, group: string) {
    super(id, age, name, lastname);
    this.classes = classes;
    this.grade = grade;
    this.group = group;
  }

}

@Component({
  selector: 'student-detail',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentDetailComponent {
  @Input()
  student: Student;
}

