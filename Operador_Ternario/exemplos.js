condição ? valorSeVerdadeiro : valorSeFalso; //sintaxe do operador ternário

//Com if...else
let nota = Number(prompt("Nota:"));
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//Com operador ternário

let nota = Number(prompt("Nota:"));
console.log(nota >= 7 ? "Aprovado" : "Reprovado");


//Exemplo: Par ou Ímpar

//if...else
let num = Number(prompt("Número:"));
if (num % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

//operador ternário
let num = Number(prompt("Número:"));
console.log(num % 2 === 0 ? "Par" : "Ímpar");

//Guardando o resultado em uma variável

let idade = Number(prompt("Digite a idade:"));

let mensagem = idade >= 18
    ? "Pode dirigir"
    : "Não pode dirigir";

console.log(mensagem);

//É muito comum usar o ternário para atribuir um valor a uma variável
//tornando o código mais conciso.

//Versão com if...else:

let idade = Number(prompt("Digite a idade:"));
let mensagem;

if (idade >= 18) {
   mensagem = "Pode dirigir";
}
else {
   mensagem = "Não pode dirigir";
}
console.log(mensagem);


//Quando usar o ternário?
//Use para decisões simples e de uma linha.
//Use para atribuir um valor com base em uma condição.
//Evite aninhar ternários (? : ? :) – isso prejudica a legibilidade.
//Lembre-se: legibilidade sempre em primeiro lugar!

//Resumo final
//Operador ternário → condição ? verdadeiro : falso
//Substituto do if...else para decisões simples.
//Útil para atribuições e exibições rápidas.
//Evite aninhar, priorize a legibilidade.
//Pratique bastante!

