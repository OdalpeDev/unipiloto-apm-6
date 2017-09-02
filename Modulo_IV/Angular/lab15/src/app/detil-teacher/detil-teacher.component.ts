import { Component, Input } from '@angular/core';
import { Teacher} from "../models/teacher";

@Component({
  selector: 'teacher-detail',
  templateUrl: './detil-teacher.component.html',
  styleUrls: ['./detil-teacher.component.css']
})
export class DetilTeacherComponent {
 @Input()
  teacher: Teacher;
}