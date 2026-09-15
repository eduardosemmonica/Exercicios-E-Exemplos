// ==========================================
// JOGO: BATALHA CONTRA O DRAGÃO
// JavaScript + Node.js
// ==========================================

// Importa o módulo para ler dados digitados no terminal
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ==========================================
// VARIÁVEIS DO JOGO
// ==========================================

let vidaJogador = 200; // Desafio 1: vida aumentada de 100 para 200
let vidaMonstro = 100;

let rodada = 1;


// ==========================================
// FUNÇÃO PARA GERAR UM NÚMERO ALEATÓRIO
// ==========================================

function numeroAleatorio(minimo, maximo) {
    return Math.floor(
        Math.random() * (maximo - minimo + 1)
    ) + minimo;
}


// ==========================================
// MOSTRA O STATUS DO JOGO
// ==========================================

function mostrarStatus() {

    console.log("\n==============================");
    console.log("       ⚔️ BATALHA ⚔️");
    console.log("==============================");

    console.log("❤️ Sua vida:", vidaJogador);
    console.log("🐉 Vida do dragão:", vidaMonstro);

    console.log("==============================\n");
}


// ==========================================
// TURNO DO JOGADOR
// ==========================================

function jogar() {

    mostrarStatus();

    console.log("Rodada:", rodada);

    console.log("\nEscolha uma ação:");
    console.log("1 - ⚔️ Atacar");
    console.log("2 - 🛡️ Defender");
    console.log("3 - 🧪 Usar poção"); // Desafio extra: opção de poção

    rl.question("\nDigite sua escolha: ", function(escolha) {

        // ==================================
        // JOGADOR ATACA
        // ==================================

        if (escolha === "1") {

            let dano = numeroAleatorio(10, 30);

            vidaMonstro -= dano;

            console.log("\n⚔️ Você atacou o dragão!");
            console.log("💥 Dano causado:", dano);


            // Verifica se o dragão morreu

            if (vidaMonstro <= 0) {

                vidaMonstro = 0;

                mostrarStatus();

                console.log("🏆 VOCÊ DERROTOU O DRAGÃO!");

                rl.close();

                return;
            }


            // Ataque do dragão

            ataqueMonstro(false);
        }


        // ==================================
        // JOGADOR DEFENDE
        // ==================================

        else if (escolha === "2") {

            console.log("\n🛡️ Você levantou o escudo!");

            ataqueMonstro(true);
        }


        // ==================================
        // JOGADOR USA POÇÃO
        // ==================================

        else if (escolha === "3") {

            vidaJogador += 20;

            console.log("\n🧪 Você bebeu uma poção!");
            console.log("❤️ Recuperou 20 pontos de vida.");

            ataqueMonstro(false);
        }


        // ==================================
        // OPÇÃO INVÁLIDA
        // ==================================

        else {

            console.log("\n❌ Opção inválida!");

            jogar();

            return;
        }


        // ==================================
        // VERIFICA SE O JOGADOR MORREU
        // ==================================

        if (vidaJogador <= 0) {

            vidaJogador = 0;

            mostrarStatus();

            console.log("☠️ O DRAGÃO VENCEU!");

            rl.close();

            return;
        }


        rodada++;

        jogar();

    });
}


// ==========================================
// ATAQUE DO DRAGÃO
// ==========================================

function ataqueMonstro(defendendo) {

    let danoMonstro = numeroAleatorio(20, 40); // Desafio 2: dano aumentado de (8,25) para (20,40)


    // Se estiver defendendo, reduz o dano

    if (defendendo === true) {

        danoMonstro = Math.floor(danoMonstro / 2);

        console.log("🛡️ Seu escudo reduziu o dano!");
    }


    vidaJogador -= danoMonstro;

    console.log("🐉 O dragão lançou uma bola de fogo!"); // Desafio 3: texto trocado
    console.log("💥 Você recebeu", danoMonstro, "de dano.");

}


// ==========================================
// INÍCIO DO JOGO
// ==========================================

console.log("\n🐉 BATALHA CONTRA O DRAGÃO 🐉");

console.log("\nVocê encontrou um dragão!");
console.log("Derrote-o antes que ele derrote você.");

jogar();
