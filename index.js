let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ["a", "b", "c"]];

function suma(a, b) {
    return a + b;
}

function potenciacion(a, b) {
    let resultado = 1;
    const exponente = Math.abs(b);

    for (let i = 0; i < exponente; i++) {
        resultado *= a;
    }

    return b < 0 ? 1 / resultado : resultado;
}

function separarPalabras(texto) {
    return texto.split(" ");
}

function repetirString(texto, veces) {
    return texto.repeat(veces);
}

function esPrimo(numero) {
    if (numero <= 1 || !Number.isInteger(numero)) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }

    return true;
}

function ordenarArray(array) {
    return [...array].sort((a, b) => a - b);
}

function obtenerPares(array) {
    return array.filter((numero) => numero % 2 === 0);
}

function pintarArray(array) {
    return `[${array.join(", ")}]`;
}

function arrayMapi(array, funcion) {
    return array.map(funcion);
}

function eliminarDuplicados(array) {
    return [...new Set(array)];
}

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ["Hola", "Mundo"];
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
let arrayDeArrays = [[756, "nombre"], [225, "apellido"], [298, "direccion"]];

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function esPar(numero) {
    return numero % 2 === 0;
}

function resta(a, b) {
    return a - b;
}

let arrayFunciones = [suma, resta, multiplicacion];

function ordenarArray2(array) {
    return [...array].sort((a, b) => b - a);
}

function obtenerImpares(array) {
    return array.filter((numero) => numero % 2 !== 0);
}

function sumarArray(array) {
    return array.reduce((sumaTotal, numero) => sumaTotal + numero, 0);
}

function multiplicarArray(array) {
    return array.reduce((producto, numero) => producto * numero, 1);
}