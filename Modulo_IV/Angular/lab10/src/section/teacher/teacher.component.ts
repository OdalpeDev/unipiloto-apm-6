import { Component, Input } from '@angular/core';
import { Person } from '../../models/person';

export class Teacher extends Person {
  profession: string;
  grades: Array<number>;
  groups: Array<string>;

  constructor(id: number, age: number, name: string, lastname: string, profession: string, grades: Array<number>, groups: Array<string>) {
    super(id, age, name, lastname);
    this.profession = profession;
    this.grades = grades;
    this.groups = groups;
  }
}

@Component({
  selector: 'teacher-detail',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherDetailComponent {
  @Input()
  teacher: Teacher;
}