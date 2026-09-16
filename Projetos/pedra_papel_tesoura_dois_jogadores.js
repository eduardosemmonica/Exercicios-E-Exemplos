
const prompt = require("prompt-sync")();
 
let jogarnovamente;
let escolha;
let escolha2;
let computador;
 
do {
    console.clear();

    console.log("==================================")
    console.log("🪨 PEDRA, PAPEL E TESOURA ✂️")
    console.log("==================================")
    console.log("1 - 🪨 Pedra;")
    console.log("2 - 📄 Papel")
    console.log("3 - ✂️ Tesoura")
 
    escolha = prompt("Escolha uma opcao: ");
    console.clear();

    console.log("==================================")
    console.log("🪨 PEDRA, PAPEL E TESOURA ✂️")
    console.log("==================================")
    console.log("1 - 🪨 Pedra;")
    console.log("2 - 📄 Papel")
    console.log("3 - ✂️ Tesoura")

    escolha2 = prompt("Escolha uma Jogador 2 opcao: ");
 

 
    switch (escolha) {
        case "1":
            console.log("Jogador 1 escolheu 🪨 Pedra");
            break;
        case "2":
            console.log("Jogador 1 escolheu 📄 Papel");
            break;
        case "3":
            console.log("Jogador 1 escolheu ✂️ Tesoura");
            break;
        default:
            console.log("Opcao invalida!");
    }
    switch (escolha2) {
        case "1":
            console.log("Jogador 2 escolheu 🪨 Pedra");
            break;
        case "2":
            console.log("Jogador 2 escolheu 📄 Papel");
            break;
        case "3":
            console.log("Jogador 2 escolheu ✂️ Tesoura");
            break;
    }

    if (escolha === escolha2) {
        console.log("Empate!");
    } else if (escolha === "1" && escolha2 === "3") {
        console.log("A vitoria e do Jogador 1! 🪨 Pedra ganha de ✂️ Tesoura");

    } else if (escolha === "1" && escolha2 === "2") {
        console.log("A vitoria e do Jogador 2! 📄 Papel ganha de 🪨 Pedra");

    } else if (escolha === "2" && escolha2 === "1") {
        console.log("A vitoria e do Jogador 1! 📄 Papel ganha de 🪨 Pedra");

    } else if (escolha === "2" && escolha2 === "3") {
        console.log("A vitoria e do Jogador 2! ✂️ Tesoura ganha de 📄 Papel");

    } else if (escolha === "3" && escolha2 === "1") {
        console.log("A vitoria e do Jogador 2! 🪨 Pedra ganha de ✂️ Tesoura");

    } else if (escolha === "3" && escolha2 === "2") {
        console.log("A vitoria e do Jogador 1! ✂️ Tesoura ganha de 📄 Papel");
    }
 
    jogarnovamente = prompt("Deseja jogar novamente? (s/n): ");
 
} while (jogarnovamente === "s" && escolha >= 1 && escolha <= 3 && escolha2 >= 1 && escolha2 <= 3);
 
console.log("Obrigado por jogar!");