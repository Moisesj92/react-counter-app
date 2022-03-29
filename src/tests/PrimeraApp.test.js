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

});