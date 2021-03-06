//Comando (snippet) para crear toda la estructura de un componente con propTypes => "rafcp"

import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value})=>{

    const[counter,setCounter] = useState(value); //el useState retorna un arreglo con 2 valores.

    //Reset
    const handleReset = ()=>{
        setCounter(value);  
    }
    //handleAdd
    const handleAdd = ()=>{
        setCounter(counter + 1);  
        // setCounter((c)=>c+1);
    }
    //handleMenos o handleSubtrack
    const handleSubtrack = ()=>{
        setCounter(counter - 1);  
        
    }
        return(
            <>
                <h1>CounterApp</h1>
                <button onClick={handleAdd}>+1</button>
                {/* <button onClick={handleReset}>Reset</button> */}
                <h2 >{counter}</h2>
                <button onClick={handleSubtrack}>-1</button>
            </>
        );
}

CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;