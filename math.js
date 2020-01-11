const Math={};

function add(x1,x2){
    return x1+x2;
}
function substract(x1,x2){
    return x1-x2;
}
function multiply(x1,x2){
    return x1*x2;
}
function divede(x1,x2){
    if(x2 == 0){
        console.log("No se puede dividir entre 0");
    } else {
        return x1/x2;
    }
}

//Exports como un objeto 

Math.add=add;
Math.substract=substract;
Math.multiply=multiply;
Math.divide=divede;

module.exports=Math;

/* El mas comun es el metodo module ya que este puede exportar otras cosas
no solo un objeto si no cosas como una funcion.
function hello(name){
    console.log('Hola',name);
}
module.exports=hello;*/

//Export metodo por metodo
/*
exports.add= add;
exports.substract= substract;
exports.multiply= multiply;
exports.divede=divede;
*/