import '@testing-library/jest-dom';

import { getSaludo } from '../../base-pruebas/02-template-string';

describe('pruebas en  02-template-string.test.js', () => {

    test('getSaludo debe retornar : Hola  + "Nombre" ', () => {
        const nombre = 'Ivan';
        const saludo = getSaludo( nombre );
        // console.log(saludo);
        expect(saludo).toBe('Hola '+nombre);
    })

    //getSaludo debe retornar: "Hola Carlos" si no hay argumento nombre
    test('getSaludo debe retornar: "Hola Carlos" si no hay argumento nombre', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    })
    
    
})
