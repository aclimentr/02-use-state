import React, {useState} from 'react';

const MiPrimerEstado = () => {

    /*
    //PROBLEMATICA
    let nombre = "Alvaro Climent";

    const cambiarNombre = e => {
        nombre = "Paquito Fernandez";
    }
    */
    /*El Hook useState está formado por dos partes, la variable que va a guardar el dato del estado 
    y la función que va a permitirme acceder a ese estado y modificarlo, para eso utilizamos la
    destructuración "[nombre, setNombre]" */
    const [ nombre, setNombre ] = useState("Alvaro Climent");

    const cambiarNombre = (e, nombreFijo) => {
      console.log(e);
        setNombre(nombreFijo);
    }
    
   

  return (
    <div>
      <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='label'>{nombre}</strong>
        &nbsp; {/*Esto es un espacio*/}
        <button onClick={ e => cambiarNombre(e, "Alvaro") }>Cambiar nombre por Alvaro</button>
        &nbsp;
       
        <input type="text" placeholder='cambia el nombre' onKeyUp={ e => cambiarNombre(e, e.target.value)}/>

      </div>
    </div>
  )
}

export default MiPrimerEstado
