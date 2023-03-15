// let frutas = { 
//     doces: "carambola",
//     azedas: "limao"
// };

// let frutasCitricas = Object.create(frutas);

// console.log(frutasCitricas.azedas);

// frutasCitricas.legumes = "tomate";

// console.log(frutasCitricas.legumes);


let animal = {
    cachorro: function() {
        console.log("au au");
    },

    gato: function(){
        console.log("miau miau");
    }
};

let siames = Object.create(animal);

siames.cor = "marrom";

siames.gato();
console.log(siames.cor);


let akita = Object.create(animal);

akita.raca = "akita";

akita.cachorro();
console.log(akita.raca);

