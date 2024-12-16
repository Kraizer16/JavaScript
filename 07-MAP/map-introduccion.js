const mapa = new Map();

mapa.set("123", "Warllen")
mapa.set("396", "Ada")
mapa.set("133", "Nicolas")

// Verificar si una llave existe en el mapa
console.log(mapa.has("Laia"))

// get() obtiene el valor del mapa
console.log(mapa.get("123"));
console.log(mapa.get("555"));

console.log("=".repeat(20))

// Recorrer con for .. of
for(let llave of mapa.keys()) {
    console.log(llave + " : " + mapa.get(llave));
}

console.log("=".repeat(20))

for (let [llave, valor] of mapa) {
    console.log(llave + " : " + valor)
}

console.log("=".repeat(20))

// Recorrido por forEach
mapa.forEach((llave, valor) => console.log(llave + " -> " + valor));

console.log("=".repeat(20))

console.log("tamaño: " + mapa.size);
mapa.delete("133");
console.log("tamaño: " + mapa.size)
mapa.clear();
console.log("tamaño: " + mapa.size)