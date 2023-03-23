class ContaBancaria {
   constructor(saldoCC, saldoPou, jurosPoupanca, tempoDias) {
      this.saldoCC = saldoCC;
      this.saldoPou = saldoPou;
      this.jurosPoupanca = jurosPoupanca;
      this.tempoDias = tempoDias;
   }

   deposito(depositoSaldo) {
      this.saldoCC += depositoSaldo;
      return depositoSaldo;
   }

   saque(retiraSaldo) {
      this.saldoCC -= retiraSaldo;

   }

   transferir(saldoPou){
      this.saldoCC -= saldoPou;
      this.saldoPou += saldoPou;
   }

}

class ContaBancaria2 extends ContaBancaria{
   constructor(jurosDobrados){
      this.jurosDobrados = (jurosDobrados * 2);
   }
}

let contaGilson = new ContaBancaria(2, 1000, 0.2, 900);

console.log(contaGilson);

contaGilson.deposito(100);

console.log(contaGilson);

contaGilson.saque(2);

console.log(contaGilson);

contaGilson.transferir(500);

console.log(contaGilson);