let conj = new Set()

console.log(conj.size);

conj.add("Audi");
conj.add("Mercedes");
conj.add("Audi");
console.log(conj);

conj.delete("Mercedes");
console.log(conj)

console.log(conj.has("Mercedes")) // True: si existe

// Recorridos: for of
for(let elem of conj) {
    console.log(elem);
}

// Recorrido con un for each
conj.forEach(elem => console.log(elem))

// values() devuelve un iterador con todos los valores
console.log(conj.values());

conj.clear();

console.log(conj.size);