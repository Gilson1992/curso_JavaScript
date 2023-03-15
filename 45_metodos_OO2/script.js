const cachorro = {
    patas: 2,
    latir: function(){
        console.log("au_au");
    },

    setraca : function(raca) {
        this.raca = raca;
        
    },

    getraca : function(){
        return "A raca e " +  this.raca;
    }
};

cachorro.setraca("AKITA");

console.log(cachorro.raca);

console.log(cachorro.getraca());