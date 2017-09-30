import { Injectable } from '@angular/core';
import { Student } from '../../models/student';

/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentServiceProvider {

  public listStudents: Array<Student>;

  constructor() {
  
  }

}
