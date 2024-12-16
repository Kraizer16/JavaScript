function dibujar(elemHtml, personajes) {
    let contPersonajes = "";
    for (const personaje of personajes.results) {
      contPersonajes += `<div>
      <img src=${personaje.image}>
      <h2>${personaje.name}</h2>
      <h3>${personaje.status}</h3>
      </div>`;
    }
    elemHtml.innerHTML = contPersonajes;
  }
  
  function accederPersonajes(elemHtml) {
    console.log("Funcion mostrarJSON");
    fetch("https://rickandmortyapi.com/api/character")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        dibujar(elemHtml, datos);
      })
      .catch((error) =>
        console.error("Error en el consumo del JSON", error.message)
      )
      .finally(() => console.log("Se ha consumido todo el JSON"));
  }
  
  const final = document.getElementById("principal");
  accederPersonajes(final);