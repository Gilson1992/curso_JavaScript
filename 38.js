class Ecommerce {
   constructor(itens,qtdTotal, valorTotal) {
      this.itens = itens;
      this.qtdTotal = qtdTotal;
      this.valorTotal = valorTotal;
   };

   adicionarItens(itens) {
      this.qtdTotal += itens;
   };

   removerItens(itens) {
      this.qtdTotal -= itens;
   };
}

let compras = new Ecommerce(100,500);

compras.adicionarItens(100);

console.log(compras.qtdTotal);

compras.removerItens(50);

console.log(compras.qtdTotal);


