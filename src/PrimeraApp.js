//Componentes funcionales
import React from 'react';
import PropTypes from 'prop-types';
//import React, {Fragment} from 'react';

//Agregar valores por defecto es una bueno practica
//const PrimeraApp = ({ saludo = 'Hola Mundo' }) => {
const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1> { saludo } </h1>
            <p> { subtitulo } </p>
        </>
    ); 
    
}

//Obligar a que vengan las props que necesito
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitulo 1234'
}

export default PrimeraApp;