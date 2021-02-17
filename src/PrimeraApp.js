// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


//FC
//ESTE ES EL COMPONENTE LLAMDO PrimeraApp
const PrimeraApp = ({saludo,subtitulo})=>{

    // console.log(props);
    // const saludo = {
    //     nombre: 'ivan',
    //     edad: 26,
    // }
    // const saludo = 'Hola Mundo';

    return ( 
            <>
            <h1>{saludo}</h1>
                {/* <pre>{JSON.stringify(saludo)}</pre> */}
                <p>{subtitulo}</p>
            </>

    );

};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo',
}

export default PrimeraApp;