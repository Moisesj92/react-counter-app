import { getHeroeBiIdAsync } from "../../bases/09-promesas";
import heroes from "../../data/heroes";

describe('pruebas con promesas', () => {


    test('getHeroeBiIdAsync debe retornar un heroe asycn', ( done ) => {


        const id = 1;

        getHeroeBiIdAsync(id)
            .then( (heroe) => {
                expect( heroe ).toBe( heroes[0] );
                done();
            });

    });

    test('debe obtener un error si el heroe no existe', ( done ) => {


        const id = 10;

        getHeroeBiIdAsync(id)
            .catch( (error) => {
                expect(error).toBe('heroe no encontrado');
                done();
            });

    });

});