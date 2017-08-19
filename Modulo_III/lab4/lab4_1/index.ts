let list_number: number[] = [1, 2, 3];
let list_string: string[] = ["uno", "dos", "tres"];
let list_object: Array<Object> = [list_number, list_string];

console.log("Inicia impresion de números:");

for(let i in list_number){
    console.log(list_number[i]); 
}

console.log("Inicia impresion de textos:");

for(let i in list_string){
    console.log(list_string[i]); 
}

console.log("Inicia impresion de objetos:");

list_object.forEach((obj) => {
	for(let i in obj){
       console.log(i);
   	}
   
});



