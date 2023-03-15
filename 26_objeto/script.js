let filho = {
    idade: 3,
    nome: "Gustavo",

};

let trabalho = {
    empresa: "MCM",
    supervisor: "Vitor",
    funcao: "DEV",
    salario: function(){
        console.log("2,202");
    }
};

console.log(filho.nome);
console.log(trabalho.funcao);
// console.log(trabalho.salario());
trabalho.salario();