import React from 'react';
//import React, { Fragment } from 'react';



const PrimeraApp = () =>{

    const saludo = 'Hola mundo Const'

    return (
        <>
        <h1>{saludo}</h1>
        {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
        <p>Mi PrimeraApp</p>
        </>
    );
}


export default PrimeraApp;