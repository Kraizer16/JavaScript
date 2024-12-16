import mostrarJson from './mostrarjson.js';
import mostrarTexto from './mostrartexto.js'

const btnMostrarTXT = document.getElementById("mostrartxt");
const areaTXT = document.getElementById("contenidotexto");
btnMostrarTXT.addEventListener('click', e => {
    mostrarTexto(areaTXT);
});
const btnMostrarJSON = document.getElementById("mostrarjson");
const areaJSON = document.getElementById("datostabla");
btnMostrarJSON('click', e => {
    mostrarJson(areaJSON);
});
