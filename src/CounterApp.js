import React, { useState } from "react";
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    //HandelAdd
    const handleAdd = () => {

        setCounter( counter + 1 );

        //Se pueden retornar funciones que den como resultado el nuevo valor de la costante
        /*setCounter ( (counter) => {
            return counter + 1
        } )*/
    };

    //handleSubstract
    const handleSubstract = () => {
        setCounter( counter - 1 );
    }

    //handleReset
    const handleReset = () => {
        setCounter( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>


            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleReset }> reset </button>
            <button onClick={ handleSubstract }> -1 </button>


        </>
    )

};

CounterApp.propTypes = {
    value: PropTypes.number
};

CounterApp.defaultProps = {
    value: 10
}


export default CounterApp;