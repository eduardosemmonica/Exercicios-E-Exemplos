// ==========================================
// JOGO: BATALHA CONTRA O DRAGAO
// JavaScript + Node.js
// ==========================================

// Importa o modulo para ler dados digitados no terminal
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ==========================================
// VARIAVEIS DO JOGO
// ==========================================

let vidaJogador = 200; // Desafio 1: vida aumentada de 100 para 200
let vidaMonstro = 100;

let rodada = 1;


// ==========================================
// FUNCAO PARA GERAR UM NUMERO ALEATORIO
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
    console.log("🐉 Vida do dragao:", vidaMonstro);

    console.log("==============================\n");
}


// ==========================================
// TURNO DO JOGADOR
// ==========================================

function jogar() {

    mostrarStatus();

    console.log("Rodada:", rodada);

    console.log("\nEscolha uma acao:");
    console.log("1 - ⚔️ Atacar");
    console.log("2 - 🛡️ Defender");
    console.log("3 - 🧪 Usar pocao"); // Desafio extra: opcao de pocao

    rl.question("\nDigite sua escolha: ", function(escolha) {

        // ==================================
        // JOGADOR ATACA
        // ==================================

        if (escolha === "1") {

            let dano = numeroAleatorio(10, 30);

            vidaMonstro -= dano;

            console.log("\n⚔️ Voce atacou o dragao!");
            console.log("💥 Dano causado:", dano);


            // Verifica se o dragao morreu

            if (vidaMonstro <= 0) {

                vidaMonstro = 0;

                mostrarStatus();

                console.log("🏆 VOCE DERROTOU O DRAGAO!");

                rl.close();

                return;
            }


            // Ataque do dragao

            ataqueMonstro(false);
        }


        // ==================================
        // JOGADOR DEFENDE
        // ==================================

        else if (escolha === "2") {

            console.log("\n🛡️ Voce levantou o escudo!");

            ataqueMonstro(true);
        }


        // ==================================
        // JOGADOR USA POCAO
        // ==================================

        else if (escolha === "3") {

            vidaJogador += 20;

            console.log("\n🧪 Voce bebeu uma pocao!");
            console.log("❤️ Recuperou 20 pontos de vida.");

            ataqueMonstro(false);
        }


        // ==================================
        // OPCAO INVALIDA
        // ==================================

        else {

            console.log("\n❌ Opcao invalida!");

            jogar();

            return;
        }


        // ==================================
        // VERIFICA SE O JOGADOR MORREU
        // ==================================

        if (vidaJogador <= 0) {

            vidaJogador = 0;

            mostrarStatus();

            console.log("☠️ O DRAGAO VENCEU!");

            rl.close();

            return;
        }


        rodada++;

        jogar();

    });
}


// ==========================================
// ATAQUE DO DRAGAO
// ==========================================

function ataqueMonstro(defendendo) {

    let danoMonstro = numeroAleatorio(20, 40); // Desafio 2: dano aumentado de (8,25) para (20,40)


    // Se estiver defendendo, reduz o dano

    if (defendendo === true) {

        danoMonstro = Math.floor(danoMonstro / 2);

        console.log("🛡️ Seu escudo reduziu o dano!");
    }


    vidaJogador -= danoMonstro;

    console.log("🐉 O dragao lancou uma bola de fogo!"); // Desafio 3: texto trocado
    console.log("💥 Voce recebeu", danoMonstro, "de dano.");

}


// ==========================================
// INICIO DO JOGO
// ==========================================

console.log("\n🐉 BATALHA CONTRA O DRAGAO 🐉");

console.log("\nVoce encontrou um dragao!");
console.log("Derrote-o antes que ele derrote voce.");

jogar();
