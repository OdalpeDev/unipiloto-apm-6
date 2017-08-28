import { Component, Input } from '@angular/core';
import {Teacher} from '../../../models/teacher'


@Component({
  selector: 'teacher-detail',
  templateUrl: './detteacher.component.html'
})
export class DetteacherComponent{
  @Input()
  teacher: Teacher;
}
