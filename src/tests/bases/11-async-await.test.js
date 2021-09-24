import { getImage } from "../../bases/11-async-await";

describe('Pruebas con Async-Await', () => {


    test('getImage debe retornar una url', async () => {

        
        const url = await getImage();

        expect( url.includes('https://') ).toBe( true );
        
    });

});