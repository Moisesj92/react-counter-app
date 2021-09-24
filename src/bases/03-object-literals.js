//Objetos literales

const persona = {
    nombre: 'arsenio',
    apellido: 'jimenez',
    edad: 28,
    direccion: {
        ciudad: 'new york',
        zipCode: 123456,
        lat: 13.456,
        lon: 123.456,
    }
}


//La asignacion de nuevas variables a objetos hace referencia al espacio de memoria en donde se definio este
//por lo que si se hace un cambio en la nueva variable asignada al objeto anterior este a su vez cambiara de valor

//const persona2 = persona; //No hacer copias a la referencia

//Para crear clones se debe usar el operador spread
const persona2 = {...persona}
persona2.nombre = 'peter';

console.log( persona );
console.log( persona2 );


