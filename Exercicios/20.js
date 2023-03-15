function permissao(idade){
   if(idade >= 18){
      console.log("Voce pode entrar na auto escola");
   } else{
      console.log("Nao pode entrar");     
   };
};

console.log(permissao(5));
console.log(permissao(20));
console.log(permissao(1));
console.log(permissao(18));
