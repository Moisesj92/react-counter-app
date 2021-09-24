//Operador ternario


const activo = true;

// let mensaje = '';

// if( activo){
//     mensaje = 'activo';
// }else{
//     mensaje = 'inactivo'
// }

// const mensaje = (activo === true) ? 'Activo' : 'Inactivo';
// const mensaje = (activo === true) ? 'Activo' : null;
//Manera corta de operador ternario para que no ejecute codigo de mas
const mensaje = activo && 'Activo';

console.log(mensaje);