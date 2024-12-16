function obtenerMoneda() {
    const datosFormu = document.forms["formu"];
    const formDataFormu = new FormData(datosFormu);
    const objFormu = Object.fromEntries(formDataFormu.entries());
    let euro = objFormu.origen;
    return euro;
  }
  
  const btn = document.getElementById("btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    accApiMoneda();
  });
  
  function accApiMoneda() {
    fetch("https://cdn.dinero.today/api/latest.json")
      .then((respuesta) => respuesta.json())
      .then((tabla) => {
        const monedas = tabla.rates;
        const dolar = monedas.USD;
        obtenerMoneda();
        let euro = obtenerMoneda();
        let resultado = dolar * euro;
  
        const crear = document.getElementById("retorno");
        crear.textContent = `${euro} euros equivalen a ${resultado} dolares`;
      });
  }