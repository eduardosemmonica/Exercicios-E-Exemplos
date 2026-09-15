const prompt = require("prompt-sync")();

function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let a = parseFloat(prompt("Digite o primeiro número: "));
let b = parseFloat(prompt("Digite o segundo número: "));
let maior = maiorNumero(a, b);
console.log(`O maior número é: ${maior}`);


// gabarito abaixo:

function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maiorNumero(5, 10)); // Saída: 10
console.log(maiorNumero(20, 15)); // Saída: 20