// averiguar si una cadena es palindrome
// Debe usar ciclos. NO USAR FUNCIONES DE CADENA


// FUNCIONES DECLARATICAS O NOMBRADAS

function esPalindrome(cad) {
    let lcad = cad.length - 1;
    for (let i = 0; i <= lcad / 2; i++) {
        //Manera hecha en clase
        // Se compara la primera letra con la última, la segunda con la penúltima, etc

        let lini = cad[i];
        let lfin = cad[lcad - i];

        if (lini !== lfin) {
            return false
        }
    }
    return true
};


// FUNCIONES EXPRESIVA O ANÓNIMA
const funcAnonima = function esPalindrome(cad) {
    let lcad = cad.length - 1;
    for (let i = 0; i <= lcad / 2; i++) {
        //Manera hecha en clase
        // Se compara la primera letra con la última, la segunda con la penúltima, etc
        let lini = cad[i];
        let lfin = cad[lcad - i];
        if (lini !== lfin) {     
           return false
        }
    }
    return true
};


// FUNCIONES FLECHA
const funcFlecha = (cad) => {
    let lcad = cad.length - 1;
    for (let i = 0; i <= lcad / 2; i++) {
        //Manera hecha en clase
        // Se compara la primera letra con la última, la segunda con la penúltima, etc
        let lini = cad[i];
        let lfin = cad[lcad - i];
        if (lini !== lfin) {     
           return false
        }
    }
    return true
};


const msgEspalindrome = (cad) =>
    funcFlecha("reconocer") ? "Es palindrome." : "No es palindrome.";


let cad = "ana";

console.log(esPalindrome(cad) ? "Es palindrome." : "No es palindrome")

console.log(funcAnonima("reconocera") ? "Es palindrome." : "No es palindrome")

console.log(msgEspalindrome("reconocer"))

