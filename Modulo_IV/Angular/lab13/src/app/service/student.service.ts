import { Injectable } from '@angular/core';
import {STUDENTS} from "../mock/student-mock";

@Injectable()
export class StudentService {

  constructor() { }

  getStudents(){
    return Promise.resolve(STUDENTS)
  }

}
