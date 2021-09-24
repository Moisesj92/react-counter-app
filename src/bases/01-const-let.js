//Variables y constantes

const nombre = 'Arsenio';
const apellido = 'Jimenez';

let valorDado = 5;
varloDado = 4;

console.log(nombre, apellido, valorDado);

//car no se debe usar
if (true)
{
    //Se puede definir constantes del mismo nombre en diferentes ambitos o scopes de funcion y programa
    const nombre = 'peter';
    console.log( nombre )

    //La asignacion de let es en scope local (en este caso dentro de el if)
    let valorDado = 6;
    console.log(valorDado);

}

console.log(valorDado);