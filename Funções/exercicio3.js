const prompt = require("prompt-sync")();

function minhaApresentação(nome, idade, cidade) {
    console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
}

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let cidade = prompt("Digite sua cidade: ");

minhaApresentação(nome, idade, cidade);


// gabarito abaixo:

function apresentar() {
    console.log("Nome: Eduardo");
    console.log("Idade: 16");
    console.log("Cidade: Schroeder");
}

apresentar();