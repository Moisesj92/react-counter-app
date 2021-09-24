//Desestructuracion de objetos
//Asignacion desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman',
}

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

//Para no usar persona cada ves se usa la desestructuracion de objetos
//Si se desea usar un nombre distinto que la key del objeto se usa la sintaxis nombre:nuevoNombre
const { nombre, edad, clave } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );

// Se puede hacer la desestructuracion en los argumentos de la funcion
const getPersona = ({nombre, edad, clave, rango = 'Capitan'}) => {

    //console.log( nombre, edad, clave, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123415, 
            lng: 124563
        }
    }

}

//Para obtener valores en objetos anidados se usan las llaves
const {nombreClave, anios, latlng:{ lat , lng } } = getPersona ( persona )

console.log( nombreClave, anios );
console.log( lat, lng );

