import { Component } from '@angular/core';

export class Driver {
  id: number;
  license: number;
  first_name: string;
  last_name: string;
  age: number;

  constructor(id: number, license: number, first_name: string, last_name: string, age: number) {
    this.id = id;
    this.license = license;
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }

}

export class Vehicle {
  brand: string;
  model: string;
  color: string;
  plate: string;
  capacity: string;
  build_year: number;
  driver: Driver = new Driver(0, 0, "", "", 0);

  constructor(brand: string, model: string, color: string, plate: string, capacity: string, build_year: number, driver: Driver) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.plate = plate;
    this.capacity = capacity;
    this.build_year = build_year;
    this.driver = driver;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Información';
  title2 = 'Detalle conductor';
  selected: Vehicle;
  vehicles: Vehicle[] = VEHICLES;

  onSelect(vehicle: Vehicle) {
    this.selected = vehicle;
  }

}

const VEHICLES: Vehicle[] = [
  {
    brand: "BMW",
    model: "X6",
    color: "Black",
    plate: "ABC123",
    capacity: "5",
    build_year: 2016,
    driver: {
      id: 56724,
      license: 987654232,
      first_name: "Conductor",
      last_name: "BMW",
      age: 55
    }
  },
  {
    brand: "Audi",
    model: "Z3",
    color: "Blue",
    plate: "XYZ098",
    capacity: "2",
    build_year: 2017,
    driver: {
      id: 870346456765,
      license: 753654754,
      first_name: "Conductor",
      last_name: "Audi",
      age: 55
    }
  },
  {
    brand: "TOYOTA",
    model: "PRADO",
    color: "Black",
    plate: "OIU653",
    capacity: "7",
    build_year: 2015,
    driver: {
      id: 94558794568,
      license: 325668526,
      first_name: "Conductor",
      last_name: "TOYOTA",
      age: 55
    }
  }
];



