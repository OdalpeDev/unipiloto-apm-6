var list_number = [1, 2, 3];
var list_string = ["uno", "dos", "tres"];
var list_object = [list_number, list_string];
console.log("Inicia impresion de números:");
for (var i in list_number) {
    console.log(list_number[i]);
}
console.log("Inicia impresion de textos:");
for (var i in list_string) {
    console.log(list_string[i]);
}
console.log("Inicia impresion de objetos:");
list_object.forEach(function (obj) {
    for (var i in obj) {
        console.log(i);
    }
});
