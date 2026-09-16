const prompt = require("prompt-sync")();

function saudacao(nome) {
    console.log(`Ola, ${nome}!`);
}


let nome = prompt("Digite seu nome: ");
saudacao(nome);


// gabarito abaixo:

