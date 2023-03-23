class Cachorro {
    constructor(patas) {
        this.patas = patas;

    }

}

class Pug extends Cachorro {
    constructor(patas, cor) {
        super(patas, patas);
        this.cor = cor;
    }
}


let feroz = new Pug(4, "marrom");

console.log(feroz);