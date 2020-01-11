
//const math=require('./math.js');

//console.log(math);
/*
console.log(math.add(1,2));
console.log(math.substract(1,2));
console.log(math.multiply(1,2));
console.log(math.divede(1,2));
console.log(math.divede(1,0));
*/

/** Example with module 'os' of node.js */

/*const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('free mem:',os.freemem(),'byte');
console.log('total mem:',os.totalmem(),'byte');
*/

const fs = require('fs');
/*
fs.writeFile('./texto.txt','Linea uno',function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('ultima linea de codigo ');
*/
/** node.js ejecuta el codigo de manera asincrona por eso
 * la crear el archivo texto.txt recibe una funcion callback
 * que se ejecutara despes de crear el fichero y veremos que 
 * el console.log de "ultima linea de codigo se ejecuta antes
 * que el concole.log de "Archivo creado".
 */

 fs.readFile('./texto.txt',function(err,data){
    if (err){
        console.log(err);
    }else{
        /** Se recibieron los datos pero estan codificados 
         * es necesario trasformalos a string con el metodo
         * toString()
         */
        console.log(data.toString());
    }
 })
 