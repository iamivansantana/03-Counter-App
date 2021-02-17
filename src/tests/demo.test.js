describe('Pruebas en el archivo demo.test.js', () => {
    test ('Deben ser iguales los string', ()=>{
        //1. inicializacion
        const mensaje = 'Hola Mundo';
        //2. Estímulo
        const mensaje2 = `Hola Mundo`;
        //3. Observa el comportamiento
        expect(mensaje).toBe(mensaje2);
    })
    
});

