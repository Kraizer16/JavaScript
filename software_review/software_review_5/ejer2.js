function pedirGranos() {
    return new Promise((resolve, reject) => {
        console.log("pedir ingredientes");
        let nRamdon = Math.ceil(Math.random() * 9 + 0);

        if (nRamdon % 2 == 0) {
            setTimeout(() => {
                resolve("Ingredientes obtenidos");
            }, 2000);

        } else {
            reject("ERROR Pedir");
        }
    });
}

function prepararCafe() {
    return new Promise((resolve, reject) => {
        console.log("...Mezclando");
        let nRamdon = Math.ceil(Math.random() * 9 + 0);


        if (nRamdon % 2 == 0) {
            setTimeout(() => {
                resolve("Mezclado");
            }, 1000);

        } else {
            reject(" ERROR mezclando");

        }

    });
}


function servirCafe() {
    return new Promise((resolve, reject) => {
        console.log("... cocinando");
        let nRamdon = Math.ceil(Math.random() * 9 + 0);


        if (nRamdon % 2 == 0) {
            setTimeout(() => {
                resolve("cocinado");
            }, 3000);

        } else {
            reject("ERROR cocinando");

        }

    });
}


async function prepararUnCafe() {
    try {
        const granos = await pedirGranos();
        console.log(granos);

        const cafe = await prepararCafe();
        console.log(cafe);

        const servido = await servirCafe();
        console.log(servido);

        console.log("¡Disfruta tu comida!");

    } catch (error) {
        console.log(error)
    }

}


prepararUnCafe();