//Proyecto final - Calculadora

const sumar = function (n1, n2) {return n1 + n2}
const restar = function (n1, n2) {return n1 - n2}
const multiplicar = function (n1, n2) {return n1 * n2}
const dividir = function (n1, n2) {return n1 / n2}

let calculo = [];

let numero1 = parseFloat(prompt("Ingrese un número"));
    calculo.push(numero1);
    console.log(calculo);
let numero2 = parseFloat(prompt("Ingrese un número"));
    calculo.push(numero1);
    console.log(calculo);
let operacion = prompt("¿Qué operación quieres realizar? +,-,*,/");
    calculo.push(operacion);
    console.log(calculo);