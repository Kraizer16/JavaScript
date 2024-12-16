function calcularInteresMensual(monto, interesAnual) {
    return (monto * (interesAnual / 100)) / 12;
}

function encabezadoWEB() {
    document.write(`
        <table border="1" width="60%">
            <tr>
                <th>MES</th>
                <th>VALOR</th>
                <th>VALOR TOTAL</th>
                <th>CAPITAL</th>
                <th>INTERES</th>
                <th>TOTAL</th>
            </tr>
    `);
}

function cuerpoWEB(mes, valor, valorTotal, capital, interes, total) {
    const background = mes % 2 === 0 ? 'white' : '#DAF7A6';
    document.write(`
        <tr style="background: ${background}">
            <td style="text-align: center;">${mes ? mes : ''}</td>
            <td style="text-align: right;">$${valor ? valor.toFixed(2) : '.00'}</td>
            <td style="text-align: right;">$${valorTotal ? valorTotal.toFixed(2) : '0.00'}</td>
            <td style="text-align: right;">$${capital ? capital.toFixed(2) : '0.00'}</td>
            <td style="text-align: right;">$${interes ? interes.toFixed(2) : '0.00'}</td>
            <td style="text-align: right;">$${total}</td>
        </tr>
    `);
}

function calcularPrestamo() {
    const valorMonto = Number(prompt("Ingresa el valor del monto del crédito")); 
    const interesAnual = Number(prompt("Ingresa la tasa de interés anual (%)")); 
    const numPagos = Number(prompt("Ingresa el número de pagos mensuales"));

    const interesMensual = calcularInteresMensual(valorMonto, interesAnual);
    const capitalMensual = valorMonto / numPagos;
    const cuotaMensual = capitalMensual + interesMensual;
    const totalInteres = interesMensual * numPagos;
    const totalPago = valorMonto + totalInteres;

    encabezadoWEB();

    let restante = valorMonto;
    let valorTotal = totalPago;

    let sumaCapital = 0;
    let sumaInteres = 0;
    let sumaTotal = 0;

    for (let mes = 1; mes <= numPagos; mes++) {
        const capital = capitalMensual;
        const interes = interesMensual;
        const total = capital + interes;

        sumaCapital += capital;
        sumaInteres += interes;
        sumaTotal += total;

        cuerpoWEB(mes, restante, valorTotal, capital, interes, total);

        restante -= capital; 
        valorTotal -= cuotaMensual;
    }

    cuerpoWEB(null, 0, 0, sumaCapital, sumaInteres, sumaTotal);

    document.write("</table>"); 
}

calcularPrestamo();

