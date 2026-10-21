
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    descrever() {
        return `O livro "${this.titulo}" foi escrito por ${this.autor} e tem ${this.paginas} páginas.`;
    }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 256);
const livro2 = new Livro("O Hobbit", "J. R. R. Tolkien", 310);

console.log(livro1.descrever());
console.log(livro2.descrever());



class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descricao() {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }

    calcularIdade(anoAtual) {
        return anoAtual - this.ano;
    }
}

const carro1 = new Carro("Fiat", "Uno", 2015);
const carro2 = new Carro("Volkswagen", "Gol", 2020);
const carro3 = new Carro("Chevrolet", "Onix", 2022);

console.log(carro1.descricao());
console.log(`Idade: ${carro1.calcularIdade(2026)} anos`);
console.log("=================");

console.log(carro2.descricao());
console.log(`Idade: ${carro2.calcularIdade(2026)} anos`);
console.log("=================");

console.log(carro3.descricao());
console.log(`Idade: ${carro3.calcularIdade(2026)} anos`);
console.log("=================");


class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    descrevido () {
        return `O produto ${this.nome} custa R$${this.preco.toFixed(2)} e possui ${this.quantidade} unidades em estoque.`;
    }
    valorEmEstoque() {
        return (this.preco * this.quantidade).toFixed(2);
    }
}
const produto1 = new Produto("Caderno", 12.50, 3);
const produto2 = new Produto("Caneta", 2.50, 100);
const produto3 = new Produto("Lapis", 1, 15);



console.log(produto1.descrevido());
console.log(produto2.descrevido());
console.log(produto3.descrevido());

console.log(`Valor total em estoque do produto ${produto1.nome}: R$${produto1.valorEmEstoque()}`);
console.log(`Valor total em estoque do produto ${produto2.nome}: R$${produto2.valorEmEstoque()}`);
console.log(`Valor total em estoque do produto ${produto3.nome}: R$${produto3.valorEmEstoque()}`);