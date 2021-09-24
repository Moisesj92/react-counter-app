import heroes, {owners} from '../data/heroes';


export const getHeroeBiId = (id) => {
    return heroes.find( (heroe) => heroe.id === id );
}


export const getHoroesByOwner = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner );
}
