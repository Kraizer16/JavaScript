// console.log("*");
// console.log("**");
// console.log("****");
// console.log("*****");
// for (let i = 1; i <= 4; i++) {
//     let linea = ""; // Almacena la línea actual
//     for (let j = 1; j <= i; j++) {
//         linea += "*"; // Agrega un asterisco por iteración
//     }
//     console.log(linea); // Imprime la línea actual
// }

// let resultado = ""; // Variable para almacenar la salida

// for (let i = 1; i <= 4; i++) { // Itera de 1 a 4
//     resultado += "*".repeat(i); // Añade '*' repetido i veces y un salto de línea
// }

// console.log(resultado);

let num1 = Number(prompt("Escribe el primer número"));
let num2 = Number(prompt("Escribe el segundo número"));
let resultS = num1 + num2;
let resultR = num1 - num2;
let resultM = num1 * num2;
let resultD = num1 / num2;  
console.log(`La suma es: ${resultS}`);
console.log(`La resta es: ${resultR}`);
console.log(`La multiplicacion es: ${resultM}`);
console.log(`La division es: ${resultD}`);

let campers = Number(prompt("Cuantos campers hay?"))
xMonitores = campers * 2
console.log(xMonitores)
document.write(`<h1> La cantidad de Campers son: ${campers} <h1/>`)
document.write(`<h1> La cantidad de Monitores a Instalar son: ${xMonitores} <h1/>`)


