const prompt = require("prompt-sync")();

function calcularDesconto() {
    let valor = parseFloat(prompt("Digite o valor: "));
    let desconto = parseFloat(prompt("Digite o desconto: "));

    const valorComDesconto = valor - (valor * desconto / 100);
    return valorComDesconto;
}

console.log(`O valor com desconto é: ${calcularDesconto()}`);
