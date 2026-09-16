const prompt = require("prompt-sync")();
 
let jogarnovamente;
let escolha;
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
    computador = String(Math.floor(Math.random() * 3) + 1);
 
    console.log("🤖 O computador esta escolhendo...🤖");
 
    switch (escolha) {
        case "1":
            console.log("Voce escolheu 🪨 Pedra");
            break;
        case "2":
            console.log("Voce escolheu 📄 Papel");
            break;
        case "3":
            console.log("Voce escolheu ✂️ Tesoura");
            break;
        default:
            console.log("Opcao invalida!");
    }
    switch (computador) {
        case "1":
            console.log("O computador escolheu 🪨 Pedra");
            break;
        case "2":
            console.log("O computador escolheu 📄 Papel");
            break;
        case "3":
            console.log("O computador escolheu ✂️ Tesoura");
            break;
    }
 
    if (escolha === computador) {
        console.log("Empate!");
    } else if (escolha === "1" && computador === "3") {
        console.log("A vitoria e sua! 🪨 Pedra ganha de ✂️ Tesoura");

    } else if (escolha === "1" && computador === "2") {
        console.log("A vitoria e do computador! 📄 Papel ganha de 🪨 Pedra");

    } else if (escolha === "2" && computador === "1") {
        console.log("A vitoria e sua! 📄 Papel ganha de 🪨 Pedra");

    } else if (escolha === "2" && computador === "3") {
        console.log("A vitoria e do computador! ✂️ Tesoura ganha de 📄 Papel");

    } else if (escolha === "3" && computador === "1") {
        console.log("A vitoria e do computador! 🪨 Pedra ganha de ✂️ Tesoura");

    } else if (escolha === "3" && computador === "2") {
        console.log("A vitoria e sua! ✂️ Tesoura ganha de 📄 Papel");
    }
 
    jogarnovamente = prompt("Deseja jogar novamente? (s/n): ");
 
} while (jogarnovamente === "s" && escolha >= 1 && escolha <= 3);
 
console.log("Obrigado por jogar!");