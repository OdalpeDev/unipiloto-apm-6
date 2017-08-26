export class Vehicle {
	wheel: number;
	fuel: string;
	color: string;

	constructor(wheel: number, fuel: string, color: string = 'white'){
		this.color = color;
		this.fuel = fuel;
		this.wheel = wheel;
	}
}