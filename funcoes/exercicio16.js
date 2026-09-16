const prompt = require("prompt-sync")();

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let media = calcularMedia(nota1, nota2, nota3);
console.log(`A media das notas e: ${media}`);
