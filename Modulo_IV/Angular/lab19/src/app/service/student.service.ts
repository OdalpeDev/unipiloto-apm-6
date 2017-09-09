import { Injectable } from '@angular/core';
import {Student} from "../models/student";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {

  private studentURI = 'http://localhost:3000/api/students';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  
    getStudents(): Promise<Student[]> {
      return this.http.get(this.studentURI)
        .toPromise()
        .then(response => response.json().data as Student[])
        .catch(this.handleError);
    }
  
    update(student: Student): Observable<Student> {
      const url = `${this.studentURI}/${student.id}`;
      return this.http
        .put(url, JSON.stringify(student), {headers: this.headers})
        .map(() => student)
        .catch(this.handleErrorObs);
    }
  
    create(name: string): Promise<Student> {
  
      return this.http
        .post(this.studentURI, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
  
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    private handleErrorObs(error: any): Observable<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Observable.throw(error.message || error);
    }
  }