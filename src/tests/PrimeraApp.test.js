import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe( 'Prueba en <PrimeraApp />', () => {


    test('Debe mostrar <PrimeraApp /> correctamente', () =>{
        const saludo = 'hey hey';
        const wrapper = shallow( <PrimeraApp saludo={saludo}/> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar el subtitulo enviado por props',  () => {
        const saludo = 'hey hey';
        const subtitulo = 'soy subtitulo';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo}
            /> 
        );
        //Con la funcion find del wrapper podemos buscar los elementos del componente renderizado
        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe(subtitulo);

        
    });

});