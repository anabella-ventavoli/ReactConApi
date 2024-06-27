import ListImagenes from "../pages/ListImagenes";
import { Link } from 'react-router-dom';

export function Alojamiento(props) {
  const [imagenes] = ListImagenes([])

  let rutaImagen = ''
  imagenes.forEach((imagen) => (
    imagen.idAlojamiento == props.idAlojamiento ? rutaImagen = imagen.RutaArchivo : ''
  ))
 
  return (
    <div className ='contenedor-alojamiento'>
      <p>
      <Link to={`/alojamientodetalle/${props.idAlojamiento}`}>
      <img className='imagen-alojamiento' src={`./img/${rutaImagen}`} alt={`Foto de ${props.nombre}`} /> </Link> </p>
      
      <div  className = 'nombre-alojamiento'>
        <p><strong>{props.nombre}</strong></p>
      </div>

      <div className='valor-alojamiento'>
        <p>$ {props.valor} / día</p>
      </div>  

      <div className='bajada-alojamiento'>
        <p>Ubicación: </p>
        <p>{props.ubicacion}</p>
      </div>
      
      
  </div>
  );
}

