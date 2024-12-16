// Enunciado
// Una persona invierte $1,000.00 en una cuenta de ahorro que produce el 5% de interés.
// Suponiendo que todo el interés se desposita en la cuenta, calcule e imprima el monto de
// dinero en la cuenta al final de cada año, durante 10 años.
// Muestre una tabla en la página WEB que permita ver el rendimiento de la cuenta año a año.

const encabezadoConsola = function () {
    let titulo = "AÑO\t\tINVERSION";
    console.log(titulo)
    console.log("=".repeat(titulo.length + 5))
}

const cuerpoConsola = (anio, valor) => console.log(`${anio}\t\t $${valor}`);

const pieConsola = () => console.log("=".repeat(20));


function encabezadoWEB() {
    document.write
    (`<table border="1" width="45%">
          <tr>
            <th>AÑO</th>
            <th>INVERSION</th>
        </tr>`)
}

const pieWeb = () => document.write("</table>")

const cuerpoWEB = function(year, inv) {
    let background = (year % 2 == 0) ? 'white' : '#DAF7A6';
    let fila = ` 
    <tr style = 'background: ${background}'>
        <td style = 'text-align: center;'>${year}</td>
        <td style = 'text-align: right;'>$${inv}</td>
    </tr>`;


    document.write(fila);
}

function rendimiento(inversion, interes, tiempo) {
    encabezadoConsola();
    encabezadoWEB();

    for (let i = 1; i <= tiempo; i++) {
        let final = Number((inversion * (1 + interes)).toFixed(2));
        cuerpoConsola(i, final);
        cuerpoWEB(i, final);
        inversion = final;
    }

    pieConsola();
    pieWeb();
}

let inversion = Number(prompt("Valor de la inversión incial?", 1000.00));
const INTERES = 0.05;
const TIEMPO = 10;

rendimiento(inversion, INTERES, TIEMPO)