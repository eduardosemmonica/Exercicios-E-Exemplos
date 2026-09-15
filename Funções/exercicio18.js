const prompt = require("prompt-sync")();

let media;
let nota1;
let nota2;
let nota3;

calcularMedia = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;

nota1 = parseFloat(prompt("Digite a primeira nota: "));
nota2 = parseFloat(prompt("Digite a segunda nota: "));
nota3 = parseFloat(prompt("Digite a terceira nota: "));

media = calcularMedia(nota1, nota2, nota3);

console.log(`A média das notas é: ${media}`);
