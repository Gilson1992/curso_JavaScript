function Humano(cor, olhosCOr, idade, nome) {
    this.cor = cor;
    this.olhosCOr = olhosCOr;
    this.idade = idade;
    this.nome = nome;

};

Humano.prototype.saudacao = function () {
    console.log("Ola tudo Bem!");
}

let gilson = new Humano("pardo", 'Castanhos', 30, "Gilson");

console.log(gilson.nome)
gilson.saudacao();

// function Animais(tipo, patas, nadadeiras, asas, nome, ondeVive, cor) {
//     this.tipo = tipo;
//     this.patas = patas;
//     this.nadadeiras = nadadeiras;
//     this.asas = asas;
//     this.nome = nome;
//     this.ondeVive = ondeVive;
//     this.cor = cor;
// };

// Animais.prototype.oAnimalE = function () {

//     if (Animais.asas == true) {
//         console.log("Ele e um Passaro");
//     }
//     else if (Animais.nadadeiras > 0) {
//         console.log("Esse animal e um peixe");
//     }
//     else if (Animais.patas > 0) {
//         console.log("Esse animal e terreste");
//     };
// };


// let leao = new Animais("Mamifero", 4, 0, 0, "Leao", "Savana", "marrom");

// console.log(leao.tipo);

// console.log(leao.oAnimalE());