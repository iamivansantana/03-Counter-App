const { getHeroeById, getHeroesByOwner } = require("../../base-pruebas/08-imp-exp");
const { default: heroes } = require("../../data/heroes");
import '@testing-library/jest-dom';

describe('prubas del archivo 08-imp-exp', () => {
    
    test('debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id)   ;

        const heroeData = heroes.find(h=>h.id === id);

        expect(heroe).toEqual(heroeData);

        
    })
    
    test('debe de retornar undefined si el heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual(undefined);
        
    })

    test('debe retornar un arreglo de los heroes de DC', () => {
        const owner = 'DC';
        
        const heroesResult = getHeroesByOwner(owner);

        const heroesResulData = heroes.filter((h)=>h.owner===owner);

        expect(heroesResult).toEqual(heroesResulData);
        
    })
    test('debe retornar un arreglo de los heroes de marvel', () => {
        const owner = 'Marvel';
        
        const heroesResult = getHeroesByOwner(owner);
        // const totalheroesRes = heroesResult.length;

        expect(heroesResult.length).toBe(2);
        
    })
    
    
})
