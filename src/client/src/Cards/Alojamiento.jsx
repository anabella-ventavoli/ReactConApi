import ListImagenes from "../pages/ListImagenes";

export function Alojamiento(props) {
  const [imagenes] = ListImagenes([])


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
        <p>Ubicación: </p>
        <p>{props.ubicacion}</p>
      </div>
      <div className='valor-alojamiento'>
        <p>$ {props.valor} / día</p>
      </div>
  </div>
  );
}

