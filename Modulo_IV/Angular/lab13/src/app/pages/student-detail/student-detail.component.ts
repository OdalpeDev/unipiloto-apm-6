import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent {
 @Input()
  student: Student;
}
