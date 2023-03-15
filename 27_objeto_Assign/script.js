let eu = {
    idade: 30,
    nome: "Gilson",
    profissao: "programador",


};

let complemento = {
    cpf: "097.337.054-89",
    orgaoEmissor: "SDS",
    hobby: "jogar_PS4",
    salario: "1000.00"
    };

console.log(eu);

Object.assign(eu,complemento);

console.log(eu);