let carros = []

// Agrega al final
carros.push("Renault 4", "Fiat", "Volvo", "Ferrari");
// Elimina del final
carros.pop();
// Elimina al inicio
carros.shift();
// Agrega al inicio
carros.unshift("Audi")
console.log(carros)
// Devuelve una porcion
console.log(carros.slice(1, 3));

carros.splice(1, 2, "Mercedes", "Mazda", "Nissan");
console.log(carros)

console.log("JOIN: " + carros.join("; "))

carros.concat("Toyota", "Mitsubishi")