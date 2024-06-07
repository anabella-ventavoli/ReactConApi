//import React from "react";
//import '../hojas-de-estilo/Testimonio.css';

export function Alojamiento(props) {
  return (
    <div className='contenedor-alojamiento'>
      <p>
        <a href={props.url}>
          <img
          className='imagen-alojamiento'
          src={`./img/${props.imagen}`}
          alt={`Foto de ${props.nombre}`} /> </a>
      </p>
      <div  className='nombre-alojamiento'>
        <p><strong>{props.nombre}</strong></p>
      </div>
      <div className='bajada-alojamiento'>
        <p>{props.ubicacion}</p>
      </div>
      <div className='valor-alojamiento'>
        <p>{props.valor}</p>
      </div>
  </div>
  );
}

