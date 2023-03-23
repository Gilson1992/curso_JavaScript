// class Frutas{
//     constructor(nome, cor, sabor){
//         this.nome = nome;
//         this.cor = cor;
//         this.sabor = sabor;
//     };
// }

// let maca = new Frutas("maca", "vermelha", "doce")

// console.log(maca);
// console.log(maca.sabor);

class Pessoa {
    constructor(nome, idade, cor){
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    };
}

let pessoa1 = new Pessoa("Gilson", 30, "Parda");

console.log(pessoa1);

console.log(pessoa1.idade);
