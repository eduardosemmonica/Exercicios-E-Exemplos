const soma = require('./soma');
const subtracao = require('./subtracao');
const multiplicacao = require('./multiplicacao');
const divisao = require('./divisao');

let numero1 = 10;
let numero2 = 20;



console.log("Calculadora JS");
console.log("------------------");
console.log("Soma: " + soma(numero1, numero2));
console.log("------------------");
console.log("Subtracao: " + subtracao(numero1, numero2));
console.log("------------------");
console.log("Multiplicacao: " + multiplicacao(numero1, numero2));
console.log("------------------");
console.log("Divisao: " + divisao(numero1, numero2));
console.log("------------------");