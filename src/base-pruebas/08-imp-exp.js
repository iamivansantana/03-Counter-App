// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );


// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

