import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Router } from "@angular/router";
import { Student } from '../../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  titleStudent: string = "Students";
  selectedStudent: Student;
  idStudent: number;
  students: Student[];

  constructor(private router: Router, private studentService: StudentService) {

  }

  getProducts() {
    this.studentService.getStudents().then(student => this.students = student);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelectStudent() {
    this.selectedStudent = this.students.find(x => x.id == this.idStudent);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.create(name)
      .then(student => {
        this.students.push(student);
        this.selectedStudent = null;
      })
      .catch(error => console.error(error));
  }
}

