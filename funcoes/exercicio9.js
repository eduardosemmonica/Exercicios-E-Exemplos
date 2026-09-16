const prompt = require("prompt-sync")();

function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let a = parseFloat(prompt("Digite o primeiro numero: "));
let b = parseFloat(prompt("Digite o segundo numero: "));
let maior = maiorNumero(a, b);
console.log(`O maior numero e: ${maior}`);


// gabarito abaixo:

function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maiorNumero(5, 10)); // Saida: 10
console.log(maiorNumero(20, 15)); // Saida: 20