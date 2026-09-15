function saudacao(){
    console.log("Olá, Aluno!");
}

saudacao();
saudacao();

function saudaciao(nome) {
    console.log(`Bom Dia, ${nome}!`); // Função com parâmetro

}

saudaciao("Laerte"); //função com argumento
saudaciao("Henrique"); //função com argumento


function somar (a, b) {
    console.log(a + b);
}

 let c = somar(10, 20); //exibe 30

somar(c, 30); //exibe 60


function saudaciiao(nome) {
    console.log(`Bom Dia, Cliente!`); // Função sem parâmetro

}

saudaciiao(); 
saudaciiao(); // pode chamar a função 
            // quantas vezes quiser

function somar (a, b) {
    
    return a + b; // devolve o valor da soma
}

c = somar(10, 20); //exibe 30
console.log(c);
console.log(somar(3, 7)* 2); //exibe 20

function sum (y, x) {
    const resultado = y + x;
    return resultado; // devolve o valor da soma
}


console.log(somar(5, 5));
console.log(somar(3, 7)); //exibe 20



