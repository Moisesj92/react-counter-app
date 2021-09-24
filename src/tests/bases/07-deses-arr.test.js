import {retornaArreglo} from '../../bases/07-deses-arr';

describe('Pruebas en desestructuracion arreglos', () => {


    test('debe retornar un arreglo de numero y string', () => {

        const [letras , numeros] = retornaArreglo();


        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');


    });

});