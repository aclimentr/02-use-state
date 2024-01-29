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
        setAño(añoFijo);
    }

  return (
    <div>
      <h1>console log año</h1>
      <p>{año}</p>
      &nbsp;
      <p>Sumar años: {añoActual}</p>
      &nbsp;
      <button onClick={sumarAño}>sumar año</button>
      &nbsp;
      <button onClick={restarAño}>restar año</button>
      &nbsp;
      <input type='text' placeholder='cambia el año' onChange={e => cambiarAño(e, e.target.value)}/>
    </div>
  )
}

ComponenteAño.propTypes = {
    año: PropTypes.number.isRequired
}

export default ComponenteAño
