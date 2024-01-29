import React, { useState } from 'react'
import PropTypes from 'prop-types';

const ComponenteAño = ({año}) => {

    let [añoActual, setAño] = useState(año);


    let sumarAño = () => {
        setAño(añoActual + 1);
    };

    console.log(añoActual);

    let restarAño = () => {
        setAño(añoActual -1);
    }

    let cambiarAño = (e, añoFijo) => {
        if(Number.isInteger){
        setAño(añoFijo);
        }else{
            setAño(año);
        }
    }

  return (
    <div>
        <h2>Ejercicio con Eventos y UseState</h2>
      <h1>console log año</h1>
      <strong className='label'>{año}</strong>
      &nbsp;
      <p>Sumar años: {añoActual}</p>
      &nbsp;
      <button onClick={sumarAño}>sumar año</button>
      &nbsp;
      <button onClick={restarAño}>restar año</button>
      &nbsp;
      <input type='text' placeholder='cambia el año' onChange={e => cambiarAño(e, parseInt(e.target.value))}/>
    </div>
  )
}

ComponenteAño.propTypes = {
    año: PropTypes.number.isRequired
}

export default ComponenteAño
