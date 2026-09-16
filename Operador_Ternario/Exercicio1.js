//Exercicio 1: Faca um programa que leia um numero e informe se ele e positivo ou negativo usando o operador ternario.
const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um numero: "));

console.log(numero >= 0 ? "Positivo" : "Negativo");
