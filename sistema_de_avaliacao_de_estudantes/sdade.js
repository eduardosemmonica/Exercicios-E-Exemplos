const prompt = require('prompt-sync')();

// Variáveis: armazenam dados como nomes, notas, médias e contadores.
let nome = [];
let nota1 = [];
let nota2 = [];
let media = [];
let situacao = [];
let quantidade_de_aprovados = 0;
let quantidade_de_recuperacao = 0;
let quantidade_de_reprovados = 0;

// Entrada de dados: recebe a quantidade de estudantes.
let quantidade_de_alunos = parseInt(prompt('Digite a quantidade de estudantes: '));

// Estrutura de repetição: repete o cadastro para cada estudante.
for (let i = 0; i < quantidade_de_alunos; i++) {
    nome.push(prompt('Digite o nome do estudante: '));
    nota1.push(lerNota('Digite a primeira nota: '));
    nota2.push(lerNota('Digite a segunda nota: '));
    media.push(calcularMedia(nota1[i], nota2[i]));
    situacao.push(calcularSituacao(media[i]));

    console.log(`Nome: ${nome[i]}`);
    console.log(`Média: ${media[i].toFixed(1)}`);
    console.log(`Situação: ${situacao[i]}`);
}

// Operadores: +, /, >=, <, > e ++ são utilizados nas operações e comparações.
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Estruturas condicionais: verificam a média para definir a situação do estudante.
function calcularSituacao(media) {
    if (media >= 7) {
        quantidade_de_aprovados++;
        return 'Aprovado';
    } else if (media >= 5) {
        quantidade_de_recuperacao++;
        return 'Recuperação';
    } else {
        quantidade_de_reprovados++;
        return 'Reprovado';
    }
}

// Valida as notas recebidas e repete a solicitação enquanto forem inválidas.
function lerNota(mensagem) {
    let nota;

    do {
        nota = parseFloat(prompt(mensagem));

        if (nota < 0 || nota > 10 || isNaN(nota)) {
            console.log('Nota inválida. Digite um valor entre 0 e 10.');
        }
    } while (nota < 0 || nota > 10 || isNaN(nota));

    return nota;
}

// Apresenta os dados finais da avaliação.
console.log(`Quantidade total de estudantes: ${quantidade_de_alunos}`);
console.log(`Quantidade de aprovados: ${quantidade_de_aprovados}`);
console.log(`Quantidade em recuperação: ${quantidade_de_recuperacao}`);
console.log(`Quantidade de reprovados: ${quantidade_de_reprovados}`);

// Encerra o programa.
console.log('Fim da avaliação.');