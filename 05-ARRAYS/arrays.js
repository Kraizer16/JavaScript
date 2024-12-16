// Creación de un array
let frutas = ["manzana", "pera", "uva", "fresa", "mango"]

// Creación como instancia de objeto
let campers = new Array("Jinder", "Marlon", "Jose", "Nicolas");

let salas = new Array(3);
salas[0] = "Sputnik"
console.log(salas[0]);

// Recorre un array por POSICIONES
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

console.log("=".repeat(20))

// Recorrido por elementos
for(fruta of frutas) {
    console.log(fruta)
}

console.log("=".repeat(20) + "FOR EACH")

frutas.forEach((f) => console.log(f + "criolla"));

console.log("=".repeat(20) +"MAP")

// Recorrido con funciones LAMBDAS
frutas.map((f) => console.log("argentinas"));
frutas.filter((f, pos) => console.log(f + " - " + pos));
console.log(frutas.filter(f => {return f.length < 5}))