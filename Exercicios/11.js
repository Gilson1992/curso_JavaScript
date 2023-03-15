let idade = 19;
let CNH = "sim";




if(idade >= 18 && CNH == "sim"){
    alert("Parabens voce pode dirigir");
    console.log("Parabens voce pode dirigir");

}else if(idade >= 18 && CNH == "nao" ){
    alert("Voce nao pode nao tem CNH");
    console.log("Voce nao pode nao tem CNH");

}else  {
    alert("Voce nao possui nem CNH nem idade");
}
