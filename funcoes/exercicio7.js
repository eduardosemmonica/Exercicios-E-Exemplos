const prompt = require("prompt-sync")();

function calcularArea(largura, altura) {
    const resultado = largura * altura;
    return resultado;
}

let largura = parseFloat(prompt("Digite a largura do retangulo: "));
let altura = parseFloat(prompt("Digite a altura do retangulo: "));
let area = calcularArea(largura, altura);
console.log(`A area do retangulo e: ${area}`);



//gabarito abaixo:

function calcularArea(largura, altura) {
    return largura * altura;
}

console.log(calcularArea(5, 10)); // Saida: 50
console.log(calcularArea(3, 7)); // Saida: 21