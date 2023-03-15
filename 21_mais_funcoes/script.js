function podeDirigir(idade,cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode Dirigit");
    }else { 
        console.log("Nao pode dirigir");
    }

}

console.log(podeDirigir(15,0));
console.log(podeDirigir(3,0));
console.log(podeDirigir(25,0));
console.log(podeDirigir(18,1));
console.log(podeDirigir(22,1));
