const prompt = require("prompt-sync")();

let produto = []
let estoque = []
let i;

console.log ("Bem-vindo ao sistema de controle de estoque!");
console.log("Digite 'Sair' para encerrar o programa.");
function verificarEstoque() {
    let continuar = true;
    
    while (continuar) {
        let produtos = prompt("Digite o nome do produto: ");
        
        if (produtos === "Sair") {
            console.log("Programa encerrado.");
            continuar = false;
        } else {
            let estoques = parseInt(prompt("Digite a quantidade em estoque: "));
            produto.push(produtos);
            estoque.push(estoques);
            
            if (estoques < 0) {
                console.log(`O produto ${produtos} está em falta!`);
            }
        }
    }
}
verificarEstoque();