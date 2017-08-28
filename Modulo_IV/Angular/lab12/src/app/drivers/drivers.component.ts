import { Component, OnInit } from '@angular/core';
import { Driver } from '../../models/driver';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  titleDriver: string = 'Drivers';
  idDriver: number;
  selectedDrive: Driver;
  drivers: Driver[] = DRIVER;

  onSelectDrive() {
    this.selectedDrive = this.drivers.find(d => d.id == this.idDriver);
  }

}

const DRIVER: Driver[] = [
  {
    id: 56724,
    license: 987654232,
    name: "Conductor",
    lastname: "BMW",
    age: 55
  },
  {
    id: 870346456765,
    license: 753654754,
    name: "Conductor",
    lastname: "Audi",
    age: 55
  },
  {
    id: 94558794568,
    license: 325668526,
    name: "Conductor",
    lastname: "TOYOTA",
    age: 55
  }
];
