let frutas = ["uva","maca","melao","laranja","morango","Jaca"];
let verduras = ["tomate","cebola","coentro"];

function qtdElementos(arr) {
    if(arr.lenght >= 5){
        console.log("Muitos Elementos");
    }else{
        console.log("Poucos Elementos");
    }
};

qtdElementos(frutas);
qtdElementos(verduras);