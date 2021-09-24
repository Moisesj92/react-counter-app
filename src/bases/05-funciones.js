//Funciones

//Existe la posibilidad de que sobreescribamos el valor de una funcion cuando la definimos solo con la palabra
//reservada function
/*
function saludar (nombre){
    return `hola ${nombre}`
}

saludar = 30

console.log(saludar);*/

//para resolver este tema usaremos const
const saludar = function (nombre){
    return `hola ${nombre}`
}

//Funcion de flecha
const saludar2 = (nombre) => {
    return `hola ${nombre}`
}

const saludar3 = nombre => `hola ${nombre}`;
const saludar4 = () => `hola Mundo`;

//Funciones para retornar objetos usan () en el cuerpo de la funcion

export const getUser = () => ({
    uid: 'ABC123',
    username: 'Ja weno',
})

//tarea
//1. transformar a funcion de flecha
//2. tiene que retornar objeto impliciro
//3. pruebas

export const getUsuarioActivo = (nombre) => ({
    uid: 'abd567',
    username: nombre
})
