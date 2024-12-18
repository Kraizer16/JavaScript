const container = document.querySelector(".container");
const contador = document.getElementById("contador");

let varContador = 0;

// Agrega el evento al contenedor
container.addEventListener("click", evento => {
  evento.stopPropagation(); // Detener la propagación al body

  // Si el evento viene del botón "Aumentar"
  if (evento.target === container.children[2]) {
    varContador++; // Incrementar el contador
    contador.innerHTML = `${varContador}`; // Actualizar el valor en el DOM
  }
});

document.body.addEventListener("click", () => {
  console.log("click");
});
