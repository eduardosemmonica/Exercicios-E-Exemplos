const prompt = require('prompt-sync')();

let number;

do {
    number = parseInt(prompt("Digite um número: "));

    if (number > 0) {
        console.log("Parabens seu numero é positivo: " + number);
    } else if (number === 0) {
        console.log("Seu NUMERO É ZERO BRO");
        
        
    } else {
        console.log("Número negativo, tente novamente.");
    }
    
    
} while (number < 0 || number === 0);