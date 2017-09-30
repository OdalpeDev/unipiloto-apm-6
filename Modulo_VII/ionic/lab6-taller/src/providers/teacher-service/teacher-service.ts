import { Injectable } from '@angular/core';
import { Teacher } from '../../models/teacher';


@Injectable()
export class TeacherServiceProvider {

  public listTachers: Array<Teacher>;
  
  constructor() {
  }

}
