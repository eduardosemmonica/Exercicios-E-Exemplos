const prompt = require("prompt-sync")();

function multiplicar(num1, num2) {
    console.log(`O resultado da multiplicacao e: ${num1 * num2}`);
}
let num1 = parseFloat(prompt("Digite o primeiro numero: "));
let num2 = parseFloat(prompt("Digite o segundo numero: "));
multiplicar(num1, num2);