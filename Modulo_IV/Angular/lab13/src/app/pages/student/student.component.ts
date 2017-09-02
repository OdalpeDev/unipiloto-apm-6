import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from "../../service/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  titleStudent = 'Students:';
  idStudent: number;
  selectedStudent: Student;
  students: Student[];

  getstudents() {
    this.studentService.getStudents().then(students => this.students = students)
  }

  ngOnInit(): void {
    this.getstudents();
  }

  onSelectStudent() {
    this.selectedStudent = this.students.find(x => x.id == this.idStudent);
  }
}

