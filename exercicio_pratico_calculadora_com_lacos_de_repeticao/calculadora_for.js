
const prompt = require('prompt-sync')();

function TudoIncluso(a, b) {
    soma = a + b;
    subtracao = a - b;
    multiplicacao = a * b;
    divisao = a / b;

    console.log(`A soma dos números é: ${soma}`);
    console.log(`A subtração dos números é: ${subtracao}`);
    console.log(`A multiplicação dos números é: ${multiplicacao}`);
    console.log(`A divisão dos números é: ${divisao}`);
}

let pergunta = parseFloat(prompt('quantas operações você deseja realizar? '));
for (let i = 0; i < pergunta; i++) {
    let primeironmr = parseFloat(prompt('Digite o primeiro número: '));
    let segundonmr = parseFloat(prompt('Digite o segundo número: '));
    TudoIncluso(primeironmr, segundonmr);
}