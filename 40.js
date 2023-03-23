class Carro {
   constructor(marca, cor, gasolinaRestante, consumo){
      this.marca = marca;
      this.cor = cor;
      this.gasolinaRestante = gasolinaRestante;
      this.consumo = consumo;
   }

   dirigir(km){

      let litrosConsumidos = km / this.consumo;
      this.gasolinaRestante -= litrosConsumidos;
    
   }

   abastecer(l){
      this.gasolinaRestante += 1;
   }

 
}

let dirigirCarro = new Carro("Prisma", "Preto", 50, 14);

console.log(dirigirCarro);

dirigirCarro.dirigir(20);

console.log(dirigirCarro);

