const prompt = require("prompt-sync")();

function calcularArea(largura, altura) {
    const resultado = largura * altura;
    return resultado;
}

let largura = parseFloat(prompt("Digite a largura do retângulo: "));
let altura = parseFloat(prompt("Digite a altura do retângulo: "));
let area = calcularArea(largura, altura);
console.log(`A área do retângulo é: ${area}`);



//gabarito abaixo:

function calcularArea(largura, altura) {
    return largura * altura;
}

console.log(calcularArea(5, 10)); // Saída: 50
console.log(calcularArea(3, 7)); // Saída: 21