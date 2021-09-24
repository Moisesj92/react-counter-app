//arreglos

const arreglo = [1,2,3,4];

//El push modifica el objeto principal asi que no es recomendable usarlo
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

//para no modificar el arreglo pricipal debemos usar el spread operator
let arreglo2 = [ ...arreglo, 5 ];

const arreglo3 = arreglo2.map( function(elemento){
    return elemento * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
