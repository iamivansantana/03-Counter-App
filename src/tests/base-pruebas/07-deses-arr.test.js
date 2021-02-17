const { retornaArreglo } = require("../../base-pruebas/07-deses-arr")
import '@testing-library/jest-dom'
describe('Pruevas en archivo 07-deses-arr', () => {
    test('debe de retornar un string y un numero', () => {

        const [letras,numeros] = retornaArreglo(); //[ABC, 123];


        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
        
    })
    
    
    
})
