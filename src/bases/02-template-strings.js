//Template Strings

const nombre = 'Arsenio';
const apellido = 'jimenez';

//const nombreCompleto = nombre + ' ' + apellido;
//En las template string todo lo que esta dentro de llaves es codigo javascript
const nombreCompleto = `${nombre} ${apellido}`;

//incluso llamado a funciones
export function getSaludo(nombre = 'default'){
    //Si las funciones no tienen un return explicito devoleran undefined
    return  `Hola ${nombre}!`;
}
