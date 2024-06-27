import { Alojamiento } from './Alojamiento.jsx';
//import { datos } from "../Datos/Alojamientos.js";
import ListAlojamientos from '../pages/ListAlojamientos.jsx'
import ListImagenes from '../pages/ListImagenes.jsx';

export function Lista() {
    const [imagenes] = ListImagenes();
    const [alojamientos] = ListAlojamientos();

    const lista = alojamientos.map((alojamiento, index) =>
        <Alojamiento
            key = {index}
            //imagen = {alojamiento.imagen}
            nombre = {alojamiento.Titulo}
            ubicacion = {alojamiento.Latitud + " " + alojamiento.Longitud}
            valor = {alojamiento.PrecioPorDia}
            url = {alojamiento.url}
        />
    );
    return lista;
  }

export default Lista; 