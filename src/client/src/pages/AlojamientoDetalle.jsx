import { useParams } from "react-router-dom";
import useFetchAlojamiento from "./FetchAlojamiento";
import ListImagenes from "./ListImagenes";
//import useFetchServiciosAsociados from "./FetchServiciosAsociados";
//import ListServicios from './ListServicios';

export function AlojamientoDetalle() {
  const { id } = useParams();
  const alojamiento = useFetchAlojamiento(id);
  const [imagenes] = ListImagenes();

  let rutaImagen = ''
  imagenes.forEach((imagen) => (
    imagen.idAlojamiento == id ? rutaImagen = imagen.RutaArchivo : ''
  ))

  

  if (!alojamiento) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className="container">
        
        <div className="column-container">

          <div className="column">
            <h1>{alojamiento.Titulo}</h1>
            <p><a><img
              className='imagen-detalle'
              src={`../img/${rutaImagen}`}
              alt={`Foto de ${alojamiento.Titulo}}`} /> </a></p>
          </div>
      
          <div className="column">

            <fieldset className="descripcion">
            <p>{alojamiento.Descripcion}</p>
            </fieldset>
            
            <div className='valor-alojamiento'>
              <p>$ {alojamiento.PrecioPorDia} / día</p>
            </div>
            
            
          </div>
    
        </div>
      </div>
    </div>
  );
}

export default AlojamientoDetalle;
