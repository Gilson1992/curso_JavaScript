class Cachorro {
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    };

    get getraca(){
        return this.raca;
    }

    set setraca(raca){
        this.raca = raca;
    }
}


let poodle = new Cachorro("poodle", "branco");

poodle.setraca = "poodle";

console.log(poodle.getraca);

poodle.setraca = "indefinida";

console.log(poodle.getraca);