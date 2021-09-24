import {getSaludo} from '../../bases/02-template-strings'

describe('Pruebas en el archivo 02 template string js', () => {

    test('el metodo getSaludo debe retornar Hola $nombre', () =>{

        const nombre = 'Tommy';

        const resultOfFunction = getSaludo( nombre );

        expect( resultOfFunction ).toBe(  `Hola ${nombre}!` );

    });

    test('el metodo getSaludo debe retornar Hola default cuando no se envia el nombre', () =>{

        const resultOfFunction = getSaludo();

        expect( resultOfFunction ).toBe( 'Hola default!' );

    });

});