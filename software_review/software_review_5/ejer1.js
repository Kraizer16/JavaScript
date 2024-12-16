
function pedirGranos() {
    return new Promise((resolve, reject) => {
        console.log("Pidiendo granos de cafe");
        let nRamdon = Math.ceil(Math.random() * 9 + 0);

        if (nRamdon % 2 == 0) {
            setTimeout(() => {
                resolve("Granos de cafe recibidos");
            }, 3000);

        } else {
            reject("Granos no recividos");
        }
    });
}

function prepararCafe() {
    return new Promise((resolve, reject) => {
        console.log("...Preparando cafe");
        let nRamdon = Math.ceil(Math.random() * 9 + 0);


        if (nRamdon % 2 == 0) {
            setTimeout(() => {
                resolve("cafe preparado");
            }, 3000);

        } else {
            reject(" ERROR Cafe no Preparado");

        }

    });
}


function servirCafe() {
    return new Promise((resolve, reject) => {
        console.log("... Sirviendo el cafe");
        let nRamdon = Math.ceil(Math.random() * 9 + 0);


        if (nRamdon % 2 == 0) {
            setTimeout(() => {
                resolve("cafe servido");
            }, 2000);

        } else {
            reject("ERROR cafe no servido");

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

        console.log("¡Disfruta tu café!");

    } catch (error) {
        console.log(error)
    }

}


prepararUnCafe();
