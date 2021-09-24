import {getUser, getUsuarioActivo} from '../../bases/05-funciones';

describe('Pruebas en 05-funciones', () => {


    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'Ja weno',
        }


        const user = getUser();

        expect(user).toEqual( userTest );


    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombreTest = 'Arsenio';

        const userTest = {
            uid: 'abd567',
            username: nombreTest
        }


        const user = getUsuarioActivo( nombreTest );

        expect(user).toEqual( userTest );


    });


});