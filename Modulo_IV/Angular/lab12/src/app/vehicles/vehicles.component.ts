import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  titleVehicles: string = 'Vehicles:';
  plateVehicle: string;
  vehicle: Vehicle;
  selectedVehicle: Vehicle;
  vehicles: Vehicle[] = VEHICLES;

  onSelectVehicle() {
    this.selectedVehicle = this.vehicles.find(v => v.plate == this.plateVehicle);
  }
}


const VEHICLES: Vehicle[] = [
  {
    brand: "BMW",
    model: "X6",
    color: "Black",
    plate: "ABC123",
    capacity: "5",
    build_year: 2016
  },
  {
    brand: "Audi",
    model: "Z3",
    color: "Blue",
    plate: "XYZ098",
    capacity: "2",
    build_year: 2017
  },
  {
    brand: "TOYOTA",
    model: "PRADO",
    color: "Black",
    plate: "OIU653",
    capacity: "7",
    build_year: 2015
  }
];