const producto = "Queso manchego";
const producto2 = String("Queso de cabra");
const producto3 = new String("Queso crema");

console.log("nombre producto:", producto);
console.log("nombre producto2 string:", producto2);
console.log("nombre producto3 newstring:", producto3);

/*typeof para ver el tipo de dato que tiene una variable*/

console.log("typeof producto:", typeof producto);
console.log("typeof producto2:", typeof producto2);
console.log("typeof producto3:", typeof producto3);

let numero100 = 100;
let numero200 = "200";

console.log("numero100:", numero100);
console.log("numero200:", numero200);

console.log("typeof numero100:", typeof numero100);
console.log("typeof numero200:", typeof numero200);

/*lenght dice la longitud del texto*/
console.log("ver el metodo lenght", producto.length);

/*indexOf para buscar si una palabra existe en una cadena de texto*/
console.log("ver el metodo indexOf", producto.indexOf("Queso"));

/*0 o positivo si existe en la cadena de texto
  negativo no existe*/

/*includes retorna true o false */
console.log("ver el metodo includes", producto.includes("Queso"));


/*TIPO NUMBER*/

let numero1 = 7;
let numero2 = 3;
let numero3 = "200";
let numero4 = 2/3;

console.log("numero1:", numero1);
console.log("numero2:", numero2);
console.log("numero3:", numero3);
console.log("numero4:", numero4);

console.log("typeof numero1:", typeof numero1);
console.log("typeof numero2:", typeof numero2);
console.log("typeof numero3:", typeof numero3);
console.log("typeof numero4:", typeof numero4);

/*Para optimizar codigo se puede poner asi: */
console.log("valor typeof numero1:", numero1, typeof numero1);
console.log("valor typeof numero2:", numero2, typeof numero2);
console.log("valor typeof longitud numero3:", numero3, typeof numero3, numero3.length);
console.log("valor typeof numero4:", numero4, typeof numero4);

console.log("suma numero1 y numero2:", numero1 + numero2);
console.log("suma numero1 y numero3:", numero1 + numero3);

/*modulo % me da el valor del residuo de la division */
console.log("modulo numero1 y numero2:", numero1 % numero2);

