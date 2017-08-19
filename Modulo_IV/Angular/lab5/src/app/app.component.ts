import { Component } from '@angular/core';

interface IPerson{
   id: number;
   age: number;
   name: string;
   lastname: string;
}

class Person implements IPerson {
  id: number;
  age: number;
  name: string;
  lastname: string;

  constructor(id: number, age: number, name: string, lastname: string) {
    this.id = id;
    this.age = age;
    this.name = name;
    this.lastname = lastname;
  }
}

export class Student extends Person {
   classes: string;
   grade: number;
   group: string;

  constructor(id: number, age: number, name: string, lastname: string, classes: string, grade: number, group: string) {
    super(id, age, name, lastname);
    this.classes = classes;
    this.grade = grade;
    this.group = group;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Información estudiante:";

  alumno: Student = {
    id: 12,
    age: 23,
    name: 'Oscar',
    lastname: 'Alvarez',
    classes: 'Matematicas',
    grade: 9,
    group: '9A',
  };

}