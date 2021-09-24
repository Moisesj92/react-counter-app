//Promesas
import {getHeroeBiId, getHoroesByOwner} from "./08-imp-exp";


export const getHeroeBiIdAsync = (id) => {


    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
    
    
            const heroe = getHeroeBiId(id);

            if(typeof heroe === 'undefined')
                reject('heroe no encontrado');

            resolve( heroe );
    
        }, 1500 );
    });

}