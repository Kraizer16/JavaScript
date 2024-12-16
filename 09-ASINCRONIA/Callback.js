function myDisplayer(some) {
    console.log(some);
}

function esPrimo(num) {
    console.log(`${num} es un número Primo.`)
}

function esPar(num) {
    return num % 2 == 0
}

// Simulemos que se consulta la página de antecedentes de la
// Policia. Esta requiere un número de identificación y nos
// devuelve si la persona con ese número tiene antecedentes o no

const consultarPolicia = callback => {
    setTimeout(() => {
        const segDesde1970 = Math.floor(Date.now() / 1000)
        if (!callback(segDesde1970)) {
            console.log(segDesde1970 + " No tiene antecedentes")
        } else {
            console.log(segDesde1970 + "Tiene antecedentes")
        }
    }, 2000)
}

function myCalculator (num1, num2, funcCallback) {
    let sum = num1 + num2;
    funcCallback(sum);
}


console.log("INCIO")
myCalculator(5, 5, myDisplayer);
myCalculator(5, 5, esPrimo);

consultarPolicia(myDisplayer);
consultarPolicia(esPrimo);
let tiempo = 3000;
for(let i = 1; i <= 7; i++) {
    setTimeout(i => {
        console.log("Ejecucion: " + i)
        consultarPolicia(esPar)}, tiempo++)
}
console.log("FIN")