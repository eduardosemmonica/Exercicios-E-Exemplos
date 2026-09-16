const prompt = require('prompt-sync')();

let number;

do {
    number = parseInt(prompt("Digite um numero: "));

    if (number > 0) {
        console.log("Parabens seu numero e positivo: " + number);
    } else if (number === 0) {
        console.log("Seu NUMERO E ZERO BRO");
        
        
    } else {
        console.log("Numero negativo, tente novamente.");
    }
    
    
} while (number < 0 || number === 0);