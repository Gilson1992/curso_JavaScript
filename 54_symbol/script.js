class Passaro {
    constructor(cor, voa, Tbico) {
        this.cor = cor;
        this.voa = voa;
        this.Tbico = Tbico;
    };

    som() {
        console.log("piu piu");
    };

}

Passaro.prototype.raca = "Arara";

let olho = Symbol();

Passaro.prototype[olho] = 2;

let passaro1 = new Passaro("Vermelho/Azul", true, "curto/pequeno");

console.log(passaro1);
console.log(passaro1.raca);
passaro1.som();


console.log(Passaro.prototype[olho]);