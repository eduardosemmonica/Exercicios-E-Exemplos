//Exercício 1: Faça um programa que leia um número e informe se ele é positivo ou negativo usando o operador ternário.
const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número: "));

console.log(numero >= 0 ? "Positivo" : "Negativo");
