import { Person } from './person';

export class Driver extends Person {
    license: number;

    constructor(id: number, name: string, last_name: string, age: number, license: number) {
        super(id, age, name, last_name);
        this.license = license;
    }
}