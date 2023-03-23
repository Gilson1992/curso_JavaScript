class Endereco {
   constructor(rua, bairro, cidade, estado) {
      this.rua = rua;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
   }

   get getnovaRua() {
      return this.rua;
   }

   set setnovaRua(rua) {
      this.rua = rua;
   }
   get getNovoBairro() {
      return this.bairro;
   }

   set setNovoBairro(bairro) {
      this.bairro = bairro;
   }

   get getNovaCidade() {
      return this.cidade;

   }

   set setNovaCidade(cidade) {
      this.cidade = cidade;
   }

   get getNovoEstado() {
      return this.estado;
   }

   set setNovoEstado(estado) {
      this.estado = estado;
   }



}

let endereco = new Endereco("Rua Engenho Araci", "Imbiribeira", "Recife", "PE");

console.log(endereco);

endereco.setnovaRua = "Rua camacari";

console.log(endereco);

endereco.setNovoBairro = "Tubarao";

endereco.setNovaCidade = "MAR";

endereco.setNovoEstado = "Atlantico";

console.log(endereco);

