export class Person {
    id: number = 0;    
    name: string = "";
    lastname: string = "";
    age: number = 0;
  

    constructor(id: number, name: string, lastname: string, age: number) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.lastname = lastname;
      }
  
  }