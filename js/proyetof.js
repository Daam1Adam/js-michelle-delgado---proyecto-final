//Proyecto final - Calculadora

//ENTREGA 1 03/05

function sumar(n1, n2) { return n1 + n2; }
const restar = function (n1, n2) {return n1 - n2};
const multiplicar = function (n1, n2) {return n1 * n2};
const dividir = function (n1, n2) {return n1 / n2};
const porcentaje = function (n1,n2) {return n1 * n2 / 100};



let calculo = [];

let numero1 = parseFloat(prompt("Ingrese un número"));
    calculo.push(numero1);
    console.log(calculo);
let numero2 = parseFloat(prompt("Ingrese un número"));
    calculo.push(numero2);
    console.log(calculo);
let operacion = prompt("¿Qué operación quieres realizar? +,-,*,/,%");
    calculo.push(operacion);
    console.log(calculo);
if (operacion === "+") {
    alert("Tu resultado es " + sumar(numero1,numero2));
} else if (operacion === "-") {
    alert("Tu resultado es " + restar(numero1,numero2));
} else if  (operacion === "*") {
    alert("Tu resultado es " + multiplicar(numero1,numero2));
} else if (operacion === "/") {
    alert("Tu resultado es " + dividir(numero1,numero2));
} else if (operacion === "%") {
    alert("El " + numero1 + "% de " + numero2 + " es " + porcentaje(numero1,numero2));
} else {
    alert("Operacion no valida");
}

/*
const botonesNumeros = document.getElementsByClassName("numeros");
console.log(botonesNumeros);
const botonesOperaciones = document.getElementsByClassName("operaciones");
const botonesEspeciales = document.getElementsByClassName("especiales");
const resultado = document.getElementById("resultado");
const borrar = document.getElementById("borrar");
let pantalla = document.getElementById("pantalla");

botonesNumeros.forEach(function(botones) {
    boton.addEventListener('click', function(){
        alert(boton.innerText);
    })
})
*/