class Person {
   private	id: number;
   private age: number;
   private name: string;
   private lastname: string;

	constructor(){
		this.id = 0;
		this.age = 0;
        this.name = "";
        this.lastname = "";
    }

    asignardatos_persona(id:number, age: number, name: string, lastname: string){
        this.id = id;
		    this.age = age;
        this.name = name;
        this.lastname = lastname;
    }

    getid(): number{
		return this.id;
    }
    
    setid(id: number): void{
		this.id = id;
    }
    
    getage(): number{
		return this.age;
    }
    
    setage(age: number): void{
		this.age = age;
    }

    getname(): string{
		return this.name;
    }
    
    setname(name: string): void{
		this.name = name;
    }
    
    getlastname(): string{
		return this.lastname;
    }
    
    setlastname(lastname: string): void{
		this.lastname = lastname;
    }

}


class Student extends Person {
	private classes: Array<string>;
    private grade: number;
    private group: string;

	constructor(){
        super();
		this.classes = new Array<string>();
		this.grade = 0;
        this.group = "";
    }

    asignardatos_student(classes:Array<string>, grade: number, group: string){
        this.classes = classes;
		this.grade = grade;
        this.group = group;
    }

    getclasses(): Array<string>{
		return this.classes;
    }
    
    setclasses(clase: string): void{
		this.classes.push(clase);
    }
    
    getgrade(): number{
		return this.grade;
    }
    
    setgrade(grade: number): void{
		this.grade = grade;
    }

    getgroup(): string{
		return this.group;
    }
    
    setgroup(group: string): void{
		this.group = group;
    }

}

class Teacher extends Person {
   private profession: string;
   private grades: Array<number>;
   private groups: Array<string>;
   private list_students: Array<Student>;
    
	constructor(){
        super();
		this.profession = ""; 
		this.grades = new Array<number>();
        this.groups = new Array<string>();
        this.list_students = new Array<Student>();
    }

    asignardatos_teacher(profession:string, grades: Array<number>, groups: Array<string>){
        this.profession = profession;
		this.grades = grades;
        this.groups = groups;
    }

    getprofession(): string{
		return this.profession;
    }
    
    setprofession(profession: string): void{
		this.profession = profession;
    }
    
    getgrades(): Array<number>{
		return this.grades;
    }
    
    setgrades(grade: number): void{
        this.grades.push(grade);
    }

    getgroups(): Array<string>{
		return this.groups;
    }
    
    setgroups(group: string): void{
		this.groups.push(group);
    }

    getstudents(): Array<Student>{
        return this.list_students;
    }

    setstudents(students :Array<Student>){
        this.list_students = students;
    }

}


//creación de los estudiantes
var student1 = new Student();
student1.asignardatos_persona(111, 13, "Juan", "Primero" );
student1.asignardatos_student(["Matematicas","Fisica"], 9, "9A" );

var student2 = new Student();
student2.asignardatos_persona(222, 16, "Pedro", "Segundo" );
student2.asignardatos_student(["Quimica","Fisica"], 11, "11C" );

var student3 = new Student();
student1.asignardatos_persona(333, 11, "Pablo", "Tercero" );
student1.asignardatos_student(["Matematicas","Fisica","Sociales"], 8, "8B" );

//creación de los profesores
var teacher1 = new Teacher();
teacher1.asignardatos_persona(9875, 34, "Ana", "Primero" );
teacher1.asignardatos_teacher("Matematico",[9, 10, 11], ["9A", "9B","8B"]);
teacher1.setstudents([student1, student2, student3]);

var teacher2 = new Teacher();
teacher2.asignardatos_persona(5465, 29, "Catalina", "Segundo" );
teacher2.asignardatos_teacher("Fisico",[6,7,8,9, 10, 11], ["6A", "7", "7B","8B"]);
teacher2.setstudents([student2, student3]);

var teacher3 = new Teacher();
teacher3.asignardatos_persona(5775, 40, "Maria", "Tercero" );
teacher3.asignardatos_teacher("Matematico",[9, 10, 11], ["9A", "9B","8B"]);
teacher3.setstudents([student1]);

var teacher4 = new Teacher();
teacher4.asignardatos_persona(5775, 40, "Fulano", "Cuarto" );
teacher4.asignardatos_teacher("Matematico",[9, 10, 11], ["9A", "9B","8B"]);
teacher4.setstudents([student1, student2]);

var list_students: Array<Student> = [student1, student2, student3];
console.log("Lista de estudiantes:");
list_students.forEach(s => {
    console.log(s);
});

var list_teachers: Array<Teacher> = [teacher1, teacher2, teacher3, teacher4];
console.log("Lista de profesores:");
list_teachers.forEach(infoteacher => {
    console.log(infoteacher);
     
});

