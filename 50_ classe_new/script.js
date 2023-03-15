// function ObjetosTrab(qtd, tipo, funcao) {
//     this.qtd = qtd;
//     this.tipo = tipo;
//     this.funcao = funcao;
    
// };

// let lapis = new ObjetosTrab(1, "lapis", "Escreve");

// console.log(lapis.qtd);

function humano(nome, idade, altura, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.sexo = sexo;
};

let pessoa = new humano("Gilson", 30, 1.73, "Masculino")

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);
console.log(pessoa.sexo);