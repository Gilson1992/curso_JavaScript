let pessoa = {
    nome: "Gilson",
    idade: 30
};

let pessoa2 = Object.create(pessoa);

console.log(pessoa2.hasOwnProperty("nome"));
console.log(pessoa2.nome);

console.log(Object.getPrototypeOf(pessoa2) === pessoa);