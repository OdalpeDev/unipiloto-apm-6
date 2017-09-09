import { Component, Input } from '@angular/core';
import { Student } from "../../../models/student";
import { StudentService } from "../../../service/student.service";

@Component({
  selector: 'student-detail',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent {
  @Input()
  student: Student;

  constructor(private studentsService: StudentService) {

  }

  save(): void {
    this.studentsService.update(this.student)
      .subscribe(
      response => { console.log(response) },
      err => { console.log(err) });
  }

}
