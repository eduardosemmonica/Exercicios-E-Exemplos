const prompt = require("prompt-sync")();

// condicao ? valorSeVerdadeiro : valorSeFalso;  -> sintaxe do operador ternario

// Com if...else
{
    let nota = Number(prompt("Nota:"));
    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// Com operador ternario
{
    let nota = Number(prompt("Nota:"));
    console.log(nota >= 7 ? "Aprovado" : "Reprovado");
}


// Exemplo: Par ou Impar

// if...else
{
    let num = Number(prompt("Numero:"));
    if (num % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Impar");
    }
}

// operador ternario
{
    let num = Number(prompt("Numero:"));
    console.log(num % 2 === 0 ? "Par" : "Impar");
}

// Guardando o resultado em uma variavel
{
    let idade = Number(prompt("Digite a idade:"));

    let mensagem = idade >= 18
        ? "Pode dirigir"
        : "Nao pode dirigir";

    console.log(mensagem);
}

// E muito comum usar o ternario para atribuir um valor a uma variavel
// tornando o codigo mais conciso.

// Versao com if...else:
{
    let idade = Number(prompt("Digite a idade:"));
    let mensagem;

    if (idade >= 18) {
        mensagem = "Pode dirigir";
    } else {
        mensagem = "Nao pode dirigir";
    }
    console.log(mensagem);
}


// Quando usar o ternario?
// Use para decisoes simples e de uma linha.
// Use para atribuir um valor com base em uma condicao.
// Evite aninhar ternarios (? : ? :) - isso prejudica a legibilidade.
// Lembre-se: legibilidade sempre em primeiro lugar!

// Resumo final
// Operador ternario -> condicao ? verdadeiro : falso
// Substituto do if...else para decisoes simples.
// Util para atribuicoes e exibicoes rapidas.
// Evite aninhar, priorize a legibilidade.
// Pratique bastante!

