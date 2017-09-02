import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Product} from "../models/product";
import {Teacher} from "../models/teacher";

export class InMemoryProductService implements InMemoryDbService {
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

let teachers: Array<Teacher> = [
  {
    id: 435432534,
    name: 'Juan',
    lastname: 'Castiblanco',
    age: 43,
    profession: 'Matematico',
    grades: [9, 10, 11],
    groups: ['9A', '10A', '11B']
  },
  {
    id: 84334665524,
    name: 'Profesor',
    lastname: 'Chiflado',
    age: 43,
    profession: 'Quimico',
    grades: [5, 6, 8],
    groups: ['5A', '6A', '8B', '8C']
  },
  {
    id: 57451344222,
    name: 'Ana',
    lastname: 'Conrrado',
    age: 43,
    profession: 'Fisico',
    grades: [7, 8],
    groups: ['7A', '7B', '8A', '8B', '8C']
  }
];

    return {products, teachers};
  }

}
