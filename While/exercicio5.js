const prompt = require('prompt-sync')();

let number = parseInt(prompt("Digite um número: "));

while (number !== 0) {
    console.log("Numero atual: " + number);
    number--;
    
    if (number === 0) {
    console.log("Número final: " + number);
    
    }else if (number < 0) {
    console.log("INVÁLIDO");
    break;
}
}