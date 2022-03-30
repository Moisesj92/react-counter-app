import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp/>', ()=>{

    let wrapper; //undefined

    //este método se ejecuta antes de cada prueba
    beforeEach( () => {
        wrapper = shallow( <CounterApp/> );
    });

    test('debe mostrar <CounterApp/> correctamente', () =>{
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar el valor por defecto de 100', () =>{
        const counterInitialValue = 100;
        const wrapper = shallow( 
            <CounterApp
                value={counterInitialValue}
            /> 
        );
        const counterInitValue = wrapper.find('h2').text();
        expect( counterInitValue ).toBe(`${counterInitialValue}`);

    });

    test('debe incrementar con el botón +1', () =>{
        //Cuando la clase, tag html o lo que sea que estemos buscando trae un arreglo se usa el at para definir cual de todos quieres.
        const btn1 = wrapper.find('button').at(0);
        btn1.simulate('click');
        const counterInitValue = wrapper.find('h2').text();
        expect( counterInitValue ).toBe('11');

    });

    test('debe incrementar con el botón -1', () =>{
        const btn2 = wrapper.find('button').at(2);
        btn2.simulate('click');
        const counterInitValue = wrapper.find('h2').text();
        expect( counterInitValue ).toBe('9');

    });

    test( 'debe re-establecer el valor por defecto del counter', () => {
        const counterInitialValue = 100;
        const wrapper = shallow( 
            <CounterApp
                value={counterInitialValue}
            /> 
        );
        const btn1 = wrapper.find('button').at(0);
        const btn3 = wrapper.find('button').at(1);
        btn1.simulate('click');
        btn1.simulate('click');
        btn3.simulate('click');
        const counterInitValue = wrapper.find('h2').text();
        expect(counterInitValue).toBe(`${counterInitialValue}`);

    });

});
