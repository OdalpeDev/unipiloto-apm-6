interface Vehicle {
	wheel: number;
	fuel: string;
	color: string;

	getWhell(): number;
	getFuel(): string;
	getColor(): string;

	setWhell(wheel:number): void;
	setFuel(fuel:string): void;
	setColor(color:string): void;
}


class Car implements Vehicle{
	wheel: number;
	fuel: string;
	color: string;

	constructor(){}

	getWhell(): number{
		return this.wheel;
	}
	getFuel(): string{
		return this.fuel;
	};
	getColor(): string{
		return this.color;
	};

	setWhell(wheel: number): void{
		this.wheel = wheel;
	}
	setFuel(fuel: string): void{
		this.fuel = fuel;
	}
	setColor(color:string): void{
		this.color = color;
	}
}

var vehicle = new Car();

vehicle.setWhell(4);
vehicle.setFuel("gas");
vehicle.setColor("red");
console.log(vehicle);