const prompt = require("prompt-sync")();

function converterCelsius(fahrenheit) {
        let celsius = (fahrenheit - 32) * 5 / 9;
        return celsius;
    }
    
    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
    let celsius = converterCelsius(fahrenheit);
    console.log(`A temperatura em Celsius e: ${celsius} °C`);

    //gabarito abaixo:

function converterCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(converterCelsius(32)); // Saida: 0
console.log(converterCelsius(212)); // Saida: 100


