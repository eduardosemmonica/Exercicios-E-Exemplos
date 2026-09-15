const prompt = require("prompt-sync")();

let altura;
let kg;


calcularIMC = (altura, kg) => kg / (altura * altura);

altura = parseFloat(prompt("Digite a altura: "));
kg = parseFloat(prompt("Digite o peso: "));


console.log(`Seu IMC é: ${calcularIMC(altura, kg)}`);

if (calcularIMC(altura, kg) < 18.5) {
    console.log("Abaixo do peso");
} else if (calcularIMC(altura, kg) < 22) {
    console.log("Peso normal");
} else if (calcularIMC(altura, kg) < 25) {
    console.log("Sobrepeso");
} else if (calcularIMC(altura, kg) < 30) {
    console.log("Obesidade");
} else {
    console.log("Obesidade Grave");
    
}