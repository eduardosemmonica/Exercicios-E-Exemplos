const prompt = require("prompt-sync")();

function exibirTurma() {
    const turma = ["caleb", "Larissa", "Maria", "Miguel", "Eduardo"];
    console.log("Alunos da turma: " + turma.join(", "));
}
exibirTurma();