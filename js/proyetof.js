//Proyecto final - Calculadora

//const botonesNumeros = document.getElementsByClassName("numeros"); 
const botonesOperaciones = document.getElementsByClassName("operaciones");
const botonesEspeciales = document.getElementsByClassName("especiales");
const resultado = document.getElementById("resultado");
const borrar = document.getElementById("borrar");
let pantalla = document.getElementById("pantalla");
let numeros = []; 
let botonesNumeros = document.getElementsByClassName("numeros");

numeros.forEach(botonesNumeros => {
    document.getElementsByClassName(`boton${botonesNumeros}`).addEventListener('click',() => {
    numeros.push(botonesNumeros)
    localStorage.setItem("numerosOperacion", JSON.stringify(numeros))
    console.log(numeros);
    })
})    
resultado.addEventListener('click', function mostrarConsola() {
    console.log(resultado);
})
borrar.addEventListener('click', function mostrarConsola() {
    console.log(borrar);
})

