function tipoDado(a) {
   
 if(typeof a === 'number'){
   console.log("Este dado e um numero");

 }else if(typeof a === 'string'){
    console.log("Este dado e uma palavra");

 } else if(typeof a === 'boolean') {
   console.log("esse dado e um boolean");
 }


};

tipoDado(true);
tipoDado("Gilson");
tipoDado(30);

