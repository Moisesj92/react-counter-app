//Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ personaje1, personaje2, personaje3 ] = personajes;

/*console.log( personajes[0]);
console.log( personajes[1]);
console.log( personajes[2]);*/


export const retornaArreglo = () => {
    return ['ABC',123];
}


const [letras, numeros] = retornaArreglo();

//Tarea
const usState = (valor) => {
    return [valor, () => { console.log('hola mundo') } ];
}

const [ nombre, setNombre ] = usState('goku');