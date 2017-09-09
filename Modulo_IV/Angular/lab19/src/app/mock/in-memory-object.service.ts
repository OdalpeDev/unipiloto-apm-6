import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Product} from "../models/product";
import { Student } from '../models/student';

export class InMemoryObjectService implements InMemoryDbService {
  createDb() {
    let products: Array<Product> = [
      {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
      },
      {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
      },
      {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
      }
    ];
    let students: Array<Student> = [
      {
        id: 222,
        name: "Pedro",
        lastname: "Segundo",
        age: 16,
        classes: ["Quimica", "Fisica"],
        grade: 11,
        group: "11A"
      },
      {
        id: 111,
        name: "Catalina",
        lastname: "Alvarez",
        age: 23,
        classes: ["Matematicas", "Fisica"],
        grade: 9,
        group: "9A"
      },
      {
        id: 333,
        name: "Pablo",
        lastname: "Tercero",
        age: 11,
        classes: ["Matematicas", "Fisica", "Sociales"],
        grade: 8,
        group: "8B"
      }];

    return {products, students};
  }

}
