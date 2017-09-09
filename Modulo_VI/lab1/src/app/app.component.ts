import { Component } from '@angular/core';
import { Person } from "./models/Person";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example Firebase';
  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;

  selected: Person;
  persons: Person[];

  constructor(db: AngularFireDatabase) {
    this.inicializarselected();
    this.items = db.list('/items');

    this.items.subscribe(p => {
      this.persons = p;
      //p.forEach(i => {
       // console.log(i.id + ' -------------- ' + i.name);
      //})
    });



  }

  inicializarselected(): void {
    this.selected = {
      id: 0,
      name: '',
      lastname: '',
      age: 0
    };
  }

  onSelect(person: Person) {
    this.selected = person;
  }

  save() {

    if (this.selected["$key"] == undefined) {
      this.items.push(this.selected);
    }
    else {
      this.items.update(this.selected["$key"], this.selected);
    }
    this.inicializarselected();
  }

  delete() {
    this.items.remove(this.selected["$key"]);
    this.inicializarselected();
  }

  Clean(){
    this.inicializarselected();
  }
}