var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person() {
        this.id = 0;
        this.age = 0;
        this.name = "";
        this.lastname = "";
    }
    Person.prototype.asignardatos_persona = function (id, age, name, lastname) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.lastname = lastname;
    };
    Person.prototype.getid = function () {
        return this.id;
    };
    Person.prototype.setid = function (id) {
        this.id = id;
    };
    Person.prototype.getage = function () {
        return this.age;
    };
    Person.prototype.setage = function (age) {
        this.age = age;
    };
    Person.prototype.getname = function () {
        return this.name;
    };
    Person.prototype.setname = function (name) {
        this.name = name;
    };
    Person.prototype.getlastname = function () {
        return this.lastname;
    };
    Person.prototype.setlastname = function (lastname) {
        this.lastname = lastname;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        _super.call(this);
        this.classes = new Array();
        this.grade = 0;
        this.group = "";
    }
    Student.prototype.asignardatos_student = function (classes, grade, group) {
        this.classes = classes;
        this.grade = grade;
        this.group = group;
    };
    Student.prototype.getclasses = function () {
        return this.classes;
    };
    Student.prototype.setclasses = function (clase) {
        this.classes.push(clase);
    };
    Student.prototype.getgrade = function () {
        return this.grade;
    };
    Student.prototype.setgrade = function (grade) {
        this.grade = grade;
    };
    Student.prototype.getgroup = function () {
        return this.group;
    };
    Student.prototype.setgroup = function (group) {
        this.group = group;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        _super.call(this);
        this.profession = "";
        this.grades = new Array();
        this.groups = new Array();
        this.list_students = new Array();
    }
    Teacher.prototype.asignardatos_teacher = function (profession, grades, groups) {
        this.profession = profession;
        this.grades = grades;
        this.groups = groups;
    };
    Teacher.prototype.getprofession = function () {
        return this.profession;
    };
    Teacher.prototype.setprofession = function (profession) {
        this.profession = profession;
    };
    Teacher.prototype.getgrades = function () {
        return this.grades;
    };
    Teacher.prototype.setgrades = function (grade) {
        this.grades.push(grade);
    };
    Teacher.prototype.getgroups = function () {
        return this.groups;
    };
    Teacher.prototype.setgroups = function (group) {
        this.groups.push(group);
    };
    Teacher.prototype.getstudents = function () {
        return this.list_students;
    };
    Teacher.prototype.setstudents = function (students) {
        this.list_students = students;
    };
    return Teacher;
}(Person));
//creación de los estudiantes
var student1 = new Student();
student1.asignardatos_persona(111, 13, "Juan", "Primero");
student1.asignardatos_student(["Matematicas", "Fisica"], 9, "9A");
var student2 = new Student();
student2.asignardatos_persona(222, 16, "Pedro", "Segundo");
student2.asignardatos_student(["Quimica", "Fisica"], 11, "11C");
var student3 = new Student();
student1.asignardatos_persona(333, 11, "Pablo", "Tercero");
student1.asignardatos_student(["Matematicas", "Fisica", "Sociales"], 8, "8B");
//creación de los profesores
var teacher1 = new Teacher();
teacher1.asignardatos_persona(9875, 34, "Ana", "Primero");
teacher1.asignardatos_teacher("Matematico", [9, 10, 11], ["9A", "9B", "8B"]);
teacher1.setstudents([student1, student2, student3]);
var teacher2 = new Teacher();
teacher2.asignardatos_persona(5465, 29, "Catalina", "Segundo");
teacher2.asignardatos_teacher("Fisico", [6, 7, 8, 9, 10, 11], ["6A", "7", "7B", "8B"]);
teacher2.setstudents([student2, student3]);
var teacher3 = new Teacher();
teacher3.asignardatos_persona(5775, 40, "Maria", "Tercero");
teacher3.asignardatos_teacher("Matematico", [9, 10, 11], ["9A", "9B", "8B"]);
teacher3.setstudents([student1]);
var teacher4 = new Teacher();
teacher4.asignardatos_persona(5775, 40, "Fulano", "Cuarto");
teacher4.asignardatos_teacher("Matematico", [9, 10, 11], ["9A", "9B", "8B"]);
teacher4.setstudents([student1, student2]);
var list_students = [student1, student2, student3];
console.log("Lista de estudiantes:");
list_students.forEach(function (s) {
    console.log(s);
});
var list_teachers = [teacher1, teacher2, teacher3, teacher4];
console.log("Lista de profesores:");
list_teachers.forEach(function (infoteacher) {
    console.log(infoteacher);
});
