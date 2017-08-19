import { Component } from '@angular/core';

export class Person {
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Información profesores:";

  selected: Teacher;

  teachers: Teacher[] = TEACHERS;

  onSelect(teacher: Teacher) {
    this.selected = teacher;
  }
}

const TEACHERS: Teacher[] = [
  {
    id: 1345678,
    age: 34, 
    name: "Catalina",
    lastname: "Petro",
    profession: "Matematica",
    grades: [9,10,11],
    groups: ["9A","10B","11A"]
  },
  {
    id: 18765436,
    age: 34, 
    name: "Pedro",
    lastname: "Segundo",
    profession: "Fisico",
    grades: [6,7,11],
    groups: ["6B","7B","11C"]
  },
  {
    id: 8367543,
    age: 34, 
    name: "Julia",
    lastname: "Tercera",
    profession: "Quimico",
    grades: [5,9],
    groups: ["5A","9B"]
  }
];