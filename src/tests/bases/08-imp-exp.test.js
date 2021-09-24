import { getHeroeBiId, getHoroesByOwner } from "../../bases/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

    test('debe retornar un heroe por id', () =>{

        const id = 1;
        const heroe = getHeroeBiId( id );
        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual(heroeData);

    });

    test('debe retornar un undefined si el hero no existe', () =>{

        const id = 10;
        const heroe = getHeroeBiId( id );
        
        expect( heroe ).toBe( undefined );

    });

    test('debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHoroesByOwner(owner);
        const heroesData = heroes.filter( (heroe) => heroe.owner === owner );

        expect( heroes ).toEqual( heroesData );


    });

    test('debe retornar un arreglo con los heroes de Marvel', () =>{

        const owner = 'Marvel';
        const heroes = getHoroesByOwner(owner);
        const heroesData = heroes.filter( (heroe) => heroe.owner === owner );

        expect( heroes.length ).toBe( heroesData.length );

    });

});