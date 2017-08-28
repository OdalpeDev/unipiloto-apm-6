export class Vehicle {
	brand: string;
	model: string;
	color: string;
	plate: string;
	capacity: string;
	build_year: number;
  
	constructor(brand: string, model: string, color: string, plate: string, capacity: string, build_year: number) {
	  this.brand = brand;
	  this.model = model;
	  this.color = color;
	  this.plate = plate;
	  this.capacity = capacity;
	  this.build_year = build_year;
	}
  }