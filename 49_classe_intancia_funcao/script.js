// function pecasCarro(rodas,portas,cor,marca) {
//     let carro = Object.create({});
//     carro.rodas = rodas,
//     carro.cor = cor,
//     carro.portas = portas,
//     carro.marca = marca
//     return carro;
// };
    
// let prisma = pecasCarro(4,2,"amarelo","fiat");

// console.log(prisma);


function mamifero(lugar, peso, patas, som, cor) {
    let animal = Object.create({});
        animal.lugar = lugar,
        animal.peso = peso,
        animal.patas = patas,
        animal.som = som,
        animal.cor = cor
        return animal
    };
    
    let baleia = mamifero("agua", 2000, 0, "uuuuuu", "cinza");

    console.log(baleia);