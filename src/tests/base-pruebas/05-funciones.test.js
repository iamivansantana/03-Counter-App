import '@testing-library/jest-dom';
const { getUser,getUsuarioActivo } = require("../../base-pruebas/05-funciones")

describe('Pruebas en 05-funciones', () => {


    test('getUser Debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect(user).toEqual(userTest);

    })

    //prueba de getUsuraioActivo
    test('getUsuarioActivo Debe retornar un objeto con el nombre igual ', () => {
       
        const nombre = 'ivan';
        const userActivo = getUsuarioActivo(nombre);
       
        const userActivoTest = {
            uid: 'ABC567',
            username: nombre 
        }
        
        expect(userActivoTest).toEqual(userActivo);
        
    })
    
    
    
})
