//Proyecto final - Calculadora

//ENTREGA 1 03/05
/*let continuar;
let calculos = [];
const sumar = function (n1, n2) { return n1 + n2; }
const restar = function (n1, n2) {return n1 - n2};
const multiplicar = function (n1, n2) {return n1 * n2};
const dividir = function (n1, n2) {return n1 / n2};
const porcentaje = function (n1,n2) {return n1 * n2 / 100};

do {
    let numero1 = parseFloat(prompt("Ingrese un número"));
    let numero2 = parseFloat(prompt("Ingrese un número"));
    let operacion = prompt("¿Qué operación quieres realizar? +,-,*,/,%");
    let calculo = {numero1,numero2,operacion};
    calculos.push(calculo);

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
    continuar = confirm("¿Deseas hacer otra operación?")
}while (continuar);
console.log(calculos);*/

const botonesNumeros = document.getElementsByClassName("numeros");
const botonesOperaciones = document.getElementsByClassName("operaciones");
const botonesEspeciales = document.getElementsByClassName("especiales");
const resultado = document.getElementById("resultado");
const borrar = document.getElementById("borrar");
let pantalla = document.getElementById("pantalla");

resultado.addEventListener('click', function mostrarConsola() {
    console.log(resultado)
})
borrar.addEventListener('click', function mostrarConsola() {
    console.log(borrar)
})

