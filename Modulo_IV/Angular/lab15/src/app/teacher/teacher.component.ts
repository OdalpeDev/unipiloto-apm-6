import { Component } from '@angular/core';
import { Teacher } from '../models/teacher';
import { TeacherService } from "../service/teacher.service";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
 
  titleTeacher = 'Teachers:';
  idTeahcer: number;
  selectedTeacher: Teacher;
  teachers: Teacher[];

   constructor(private teacherService: TeacherService) { }

   getTeachers(){
     this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
   }

  ngOnInit() {
    console.log('getteachers');
    this.getTeachers();
   }

  onSelectTeacher() {
    this.selectedTeacher = this.teachers.find(x => x.id == this.idTeahcer);
    console.log( this.selectedTeacher);
  }

}