const prompt = require("prompt-sync")();

const produto = ["Notebook", "Mouse", "Teclado", "Monitor", "Impressora"];
const preco = [3000, 100, 200, 800, 400];

function mostrarProduto() {
    for (let i = 0; i < produto.length; i++) {
        console.log(`Produto: ${produto[i]} - Preço: R$${preco[i]}`);
    }
}

mostrarProduto();
