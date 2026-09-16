const prompt = require('prompt-sync')();

let number = parseInt(prompt("Digite um numero: "));

while (number !== 0) {
    console.log("Numero atual: " + number);
    number--;
    
    if (number === 0) {
    console.log("Numero final: " + number);
    
    }else if (number < 0) {
    console.log("INVALIDO");
    break;
}
}