const prompt = require("prompt-sync")();

function minhaApresentacao(nome, idade, cidade) {
    console.log(`Ola, meu nome e ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
}

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let cidade = prompt("Digite sua cidade: ");

minhaApresentacao(nome, idade, cidade);


// gabarito abaixo:

function apresentar() {
    console.log("Nome: Eduardo");
    console.log("Idade: 16");
    console.log("Cidade: Schroeder");
}

apresentar();