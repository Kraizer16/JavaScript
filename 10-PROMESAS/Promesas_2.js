const datos = [
    {
        id: 1,
        title: "Iron Man",
        year: 2008
    },
    {
        id: 2,
        title: "SpiderMan: HomeComing",
        year: 2017
    },
    {
        id: 3,
        title: "Avenger: Endgame",
        year: 2019
    }
]

// Sincrono
const getDatos = () => {
    return datos;
}

// console.log("INICIO")
// console.log(getDatos())
// console.log("FIN")

// Asincrono Callback
// const getDatosAsynCallback = (Callback) => {
//     setTimeout(function() {
//         console.log(Callback());
//     }, 3000);
// }

// console.log("INICIO")
// getDatosAsynCallback(getDatos)
// console.log("FIN")

// Promesa

const getDatosPromesa =
    new Promise((resolve, reject) => {
        setTimeout(function () {
            if (datos.length > 0) {
                resolve(datos);
            } else {
                reject("Error. Sin datos")
            }
        }, 3000);
    })

getDatosPromesa
    .then(datos => console.table(datos))
    .catch(err => console.error(err))