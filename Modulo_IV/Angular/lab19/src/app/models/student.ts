import { Person } from './person';

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