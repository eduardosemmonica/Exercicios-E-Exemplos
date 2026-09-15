const prompt = require("prompt-sync")();

function multiplicar(num1, num2) {
    console.log(`O resultado da multiplicação é: ${num1 * num2}`);
}
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
multiplicar(num1, num2);