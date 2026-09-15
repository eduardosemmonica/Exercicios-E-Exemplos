const prompt = require('prompt-sync')();

let resposta = prompt("Digite 'sair' para parar: ");

while (resposta !== 'sair') {
    console.log("Você digitou: " + resposta);
    resposta = prompt("Digite 'sair' para parar: ");
}

console.log("Fim do programa!");