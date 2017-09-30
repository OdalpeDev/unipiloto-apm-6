import { Person } from './person';

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
