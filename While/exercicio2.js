const prompt = require('prompt-sync')();

let i = 0;


do { 
    i % 2 === 0 ? console.log("Numero par: " + i) : console.log("Numero impar: " + i)

    i++;

} while (i <= 20);